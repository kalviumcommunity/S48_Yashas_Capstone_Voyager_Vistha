// server.js
const express = require('express');
const connectDB = require('./routes');
const cors = require('cors')                                                                     
require('dotenv').config();

const app = express();
const port = process.env.PUBLIC_PORT || 3000;

app.use(cors());
// Connect to MongoDB
connectDB();

// Define the route for /
app.get('/get', (req, res) => {
  res.json({ message: 'Hi This is Yashas Balaji Naidu. project' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server running on PORT: ${port}`);
  });
}

module.exports = app;
