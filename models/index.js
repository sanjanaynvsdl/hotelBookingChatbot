const sequelize = require('../config/database');
const Conversation = require('./conversation');
const Message = require('./message');

Conversation.hasMany(Message);
Message.belongsTo(Conversation);

module.exports = {
  sequelize,
  Conversation,
  Message
};