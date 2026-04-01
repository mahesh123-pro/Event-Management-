const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');
const { verifyToken } = require('../middleware/auth');

// POST /api/inquiry - Create a new inquiry (Public)
router.post('/', async (req, res) => {
    try {
        const newInquiry = new Inquiry(req.body);
        await newInquiry.save();
        res.status(201).json({ message: 'Inquiry saved successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET /api/inquiry - Fetch all inquiries (Admin protected)
router.get('/', verifyToken, async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /api/inquiry/:id - Delete inquiry (Admin protected)
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Inquiry.findByIdAndDelete(req.params.id);
        res.json({ message: 'Inquiry deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
