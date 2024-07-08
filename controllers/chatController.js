const openaiService = require('../services/openaiService');
const roomService = require('../services/roomService');
const { Conversation, Message } = require('../models');

exports.handleChat = async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    let conversation;
    if (conversationId) {
      conversation = await Conversation.findByPk(conversationId);
    } else {
      conversation = await Conversation.create();
    }

    await Message.create({
      content: message,
      role: 'user',
      ConversationId: conversation.id
    });

    const messages = await Message.findAll({
      where: { ConversationId: conversation.id },
      order: [['createdAt', 'ASC']]
    });

    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const openaiResponse = await openaiService.getChatResponse(formattedMessages);

    await Message.create({
      content: openaiResponse.content,
      role: 'assistant',
      ConversationId: conversation.id
    });

    res.json({
      message: openaiResponse.content,
      conversationId: conversation.id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};