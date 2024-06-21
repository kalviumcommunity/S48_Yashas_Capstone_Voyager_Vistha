const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModal,UserValidation} = require('./model/user');

// Middleware for token verification
const verifyToken = (req, res, next) => {
    const token = req.cookies.token || '';
    if (!token) {
        return res.status(401).json({ error: 'Access Denied' });
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid Token' });
    }
};

// Routes for UserModal
router.get('/getusers', async (req, res) => {
    try {
        const users = await UserModal.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/getusers/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModal.findById(id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create user route
router.post('/createUser', async (req, res) => {
    try {
        const { error } = UserValidation.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await UserModal.create({
            ...req.body,
            password: hashedPassword,
        });

        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModal.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.cookie('token', token, { httpOnly: true });
        res.json({ message: 'Login successful', user, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fetch all temples
router.get('/temples', async (req, res) => {
    try {
        const temples = await TempleModel.find();
        res.json(temples);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Protected route example
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
