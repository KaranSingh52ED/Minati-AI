const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileControllers");
const authenticateToken = require("../middleware/authMiddleware");
router.get("/", authenticateToken, getProfile);

module.exports = router;
