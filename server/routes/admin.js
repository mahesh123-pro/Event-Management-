const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Mocked admin for MVP Scope
// In a real app, you'd fetch this from MongoDB
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$10$YourHashedPassword'; // Default 'password123' hashed

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // For MVP, checking against env or hardcoded (not for production!)
    // In production, use: const admin = await Admin.findOne({ username });

    if (username === ADMIN_USERNAME && (password === 'password123')) { // Simplifying for setup
        const token = jwt.sign(
            { username: ADMIN_USERNAME },
            process.env.JWT_SECRET || 'your_fallback_secret',
            { expiresIn: '24h' }
        );
        return res.json({ token });
    }

    res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
