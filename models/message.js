// Assuming your Message model definition in models/Message.js or similar

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as per your project structure

const Message = sequelize.define('Message', {
  content: {
    type: DataTypes.STRING, // Ensure content is defined as STRING type
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Message;
