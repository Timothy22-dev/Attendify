const express = require("express");
const router = express.Router();

const Registration = require('../Controllers/Registration');
const Login = require('../Controllers/Login');
const {GetAllUsers, GetSingleUser} = require('../Controllers/UserController'); // Or from Registration.js if defined there

// Route to register a new user
router.post("/register", Registration);

// Route to log in a user
router.post("/login", Login);

// Route to get all users
router.get("/get-all-users", GetAllUsers);

router.get("/user-profile/:userId", GetSingleUser);

module.exports = router;
