const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { UserModal } = require('./models/voyagervisthauser.js');
const routes = require('./routes.js');
const Joi = require("joi");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// MongoDB URI for UserModal
const userModalURI = "mongodb+srv://yashasnaidu3:yashas3@cluster0.gll0see.mongodb.net/Cites?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB for UserModal
async function connectToUserDB() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(userModalURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connected to UserModal DB at ${userModalURI}`);
    } else {
        console.log(`Already connected to UserModal DB at ${userModalURI}`);
    }
}

// Define routes for UserModal
app.get('/getusers', async (req, res) => {
    try {
        const users = await UserModal.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/getusers/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModal.findById(id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/updateUsers/:id', async (req, res) => {
    const id = req.params.id;
    console.log(req.body, id);
    try {
        const updatedUser = await UserModal.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/deleteUsers/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await UserModal.findByIdAndDelete(userId);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a cookie when a user logs in
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModal.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'Login successful', user, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/createUser", async (req, res) => {
    try {
        const { error } = userValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const newUser = await UserModal.create(req.body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Use routes defined in routes.js
app.use("/main", routes);

// Connect to databases and start the server
connectToUserDB().then(() => {
    const userModalServer = app.listen(3001, () => {
        console.log("Server is running on port 3001 for UserModal");
    });
});

module.exports = app;
