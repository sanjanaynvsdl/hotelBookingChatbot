# Bot9Ai-Assignment
## Project Overview

### Hotel Booking Chatbot

This project implements a RESTful API using Express.js to create a chatbot capable of handling hotel booking queries. The chatbot utilizes OpenAI's API for natural language processing and maintains conversation history using SQLite and Sequelize. Users can interact with the chatbot to inquire about available rooms, receive pricing information, and simulate booking a room.

### Project Structure
- models/:     Contains Sequelize models for interacting with the SQLite database.
- config/:      Configuration files, possibly including database configuration and other settings.
- controllers/: Express.js route handlers for handling API requests.
- service/:     Services for integrating external APIs, such as OpenAI and hotel booking APIs.
- routes/:      Defines Express.js routes for different API endpoints.
- app.js:       Main entry point of the application where Express.js app is configured and initialized.


## Installation

### 1. Clone the repository:
```bash
git clone <repository-url>
```
### 2. Install the dependencies:
```bash
npm install
```
### 3. Create a .env file in the project's main directory and paste your OpenAI API key inside.
```bash
OPENAI_API_KEY=you_api_key
```
### 4. Start the server:
```bash
node app.js
```
## Video-Link
link : https://drive.google.com/file/d/14dasUWs1emhzYuywN3wbSNOrXbfz8tGw/view?usp=drive_link

## Image 
![image](https://github.com/sanjanaynvsdl/hotelBookingChatbot/assets/142678317/5e708af5-8791-4ebb-bcee-40cafba2f966)

