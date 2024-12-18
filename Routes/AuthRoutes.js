const express = require("express");
const router = express.Router();

// Import controllers - Ensure these are functions
const Registration = require('../Controllers/Registration');  // Function
const Login = require('../Controllers/Login');               // Function
const { GetAllUsers, GetSingleUser } = require('../Controllers/UserController'); // Functions

// Route to register a new user
router.post("/register", Registration);

// Route to log in a user
router.post("/login", Login);

// Route to get all users
router.get("/get-all-users", GetAllUsers);

// Route to get a single user by ID
router.get("/user-profile/:userId", GetSingleUser);

module.exports = router;
