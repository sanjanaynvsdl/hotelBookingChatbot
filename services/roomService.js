const axios = require('axios');

exports.getRoomOptions = async () => {
  try {
    const response = await axios.get('https://bot9assignement.deno.dev/rooms');
    return response.data;
  } catch (error) {
    console.error('Error fetching room options:', error);
    throw error;
  }
};

exports.bookRoom = async (bookingDetails) => {
  try {
    const response = await axios.post('https://bot9assignement.deno.dev/book', bookingDetails);
    return response.data;
  } catch (error) {
    console.error('Error booking room:', error);
    throw error;
  }
};