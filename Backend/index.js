const express = require('express');
const { sequelize } = require('./db');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Route handling
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server is running on port ${port}`);
}); 
