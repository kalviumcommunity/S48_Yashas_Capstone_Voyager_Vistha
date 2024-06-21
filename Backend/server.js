const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;

// Define the route for /ping with the response in JSON

app.get('/', (req, res) => {
  res.json({ message: 'Hi This is Yashas project' }); 
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀  server running on PORT: ${port}`);
  });
}

module.exports = app;
