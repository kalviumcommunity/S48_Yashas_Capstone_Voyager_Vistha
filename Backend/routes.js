const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017'; // Update with your MongoDB URI

// Database Name
const dbName = 'your-database-name'; // Update with your database name

// MongoDB client instance
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

// Call the connectToMongo function to establish connection
connectToMongo();

// Create
router.post('/create', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('items'); // Update with your collection name
    const result = await collection.insertOne(req.body);
    res.json({ message: 'Data created successfully', data: result.ops[0] });
  } catch (error) {
    res.status(500).json({ error: 'Unable to create data' });
  }
});

// Read
router.get('/read', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('items'); // Update with your collection name
    const data = await collection.find({}).toArray();
    res.json({ message: 'Data read successfully', data });
  } catch (error) {
    res.status(500).json({ error: 'Unable to read data' });
  }
});

// Update
router.put('/update/:id', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('items'); // Update with your collection name
    const id = req.params.id;
    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: req.body });
    res.json({ message: 'Data updated successfully', result });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update data' });
  }
});

// Delete
router.delete('/delete/:id', async (req, res) => {
  try {
    const db = client.db(dbName);
    const collection = db.collection('items'); // Update with your collection name
    const id = req.params.id;
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'Data deleted successfully', result });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete data' });
  }
});

module.exports = router;
