const { OpenAI } = require('openai');
const roomService = require('./roomService'); 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const getChatResponse = async (messages) => {
  const functions = [
    {
      name: "get_room_options",
      description: "Get available room options from the hotel",
      parameters: {
        type: "object",
        properties: {},
        required: []
      }
    },
    {
      name: "book_room",
      description: "Book a room at the hotel",
      parameters: {
        type: "object",
        properties: {
          roomId: { type: "integer" },
          fullName: { type: "string" },
          email: { type: "string" },
          nights: { type: "integer" }
        },
        required: ["roomId", "fullName", "email", "nights"]
      }
    }
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use a valid model name here, check OpenAI's available models
      messages: messages,
      functions: functions,
      function_call: "auto",
    });

    const responseMessage = response.choices[0].message;

    if (responseMessage.function_call) {
      const functionName = responseMessage.function_call.name;
      const functionArgs = JSON.parse(responseMessage.function_call.arguments);

      let functionResult;
      if (functionName === "get_room_options") {
        functionResult = await roomService.getRoomOptions();
      } else if (functionName === "book_room") {
        functionResult = await roomService.bookRoom(functionArgs);
      }

      const secondResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Use the same valid model name here as above
        messages: [
          ...messages,
          responseMessage,
          {
            role: "function",
            name: functionName,
            content: JSON.stringify(functionResult)
          }
        ],
      });

      return secondResponse.choices[0].message;
    }

    return responseMessage;
  } catch (error) {
    console.error('Error in getChatResponse:', error);
    throw error;
  }
};

module.exports = { getChatResponse };

