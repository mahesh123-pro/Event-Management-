const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const { verifyToken } = require('../middleware/auth');

// GET /api/gallery - Fetch all images (Public)
router.get('/', async (req, res) => {
    try {
        const gallery = await Gallery.find().sort({ createdAt: -1 });
        res.json(gallery);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/gallery - Add new image (Admin protected)
router.post('/', verifyToken, async (req, res) => {
    try {
        const newImage = new Gallery(req.body);
        await newImage.save();
        res.status(201).json(newImage);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE /api/gallery/:id - Delete image (Admin protected)
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Gallery.findByIdAndDelete(req.params.id);
        res.json({ message: 'Image deleted from gallery' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
