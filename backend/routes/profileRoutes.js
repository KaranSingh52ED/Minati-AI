const express = require('express');
const router = express.Router();
const { getProfile, searchUser } = require('../controllers/profileControllers');
const authenticateToken = require('../middleware/authMiddleware');
router.get('/', authenticateToken, getProfile);
router.post('/search', searchUser);

module.exports = router;
