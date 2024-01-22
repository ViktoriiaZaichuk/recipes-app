const express = require('express');
const AuthController  = require('../controllers/AuthController');
const { authMiddleware } = require('../middlewares/AuthMiddleware');

const router = express.Router();

// Routes Auth
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
 

module.exports = router;