const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');
const { sequelize } = require('./models/index');


// console.log(`OpenAI API Key: ${process.env.OPENAI_API_KEY}`);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', chatRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
