// server/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Please enter both username and password.' });
    }

    try {
        let user = await User.findOne({ username });
        if (!user) {
            // Create a new user if not found
            user = new User({ username, password });
            await user.save();
            return res.status(201).json({ message: 'User created and logged in.' });
        } else if (user.password === password) {
            return res.status(200).json({ message: 'Login successful.' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
