const express = require("express");
const router = express.Router();

const Registration = require('../Controllers/Registration');
const Login = require('../Controllers/Login');
const getUsers = require('../Controllers/GetAllUsers'); // Or from Registration.js if defined there

// Route to register a new user
router.post("/register", Registration);

// Route to log in a user
router.post("/login", Login);

// Route to get all users
router.get("/users", getUsers);

module.exports = router;
