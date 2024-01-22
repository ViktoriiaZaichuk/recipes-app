const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Base Route
router.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the Recipes App API!' });
});


// Combine Routes from Different Modules
router.use('/api', authRoutes);
/* router.use('/api', userRoutes); */

module.exports = router;