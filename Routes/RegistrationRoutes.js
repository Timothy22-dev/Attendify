const express = require("express");

const router = express.Router();

const Registration = require('../Controllers/Registration')

// Route to register a new user
router.post("/register", Registration);

// Route to get all users
router.get("/users", )

module.exports = router;
