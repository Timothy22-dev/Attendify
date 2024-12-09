const User = require('../models/User'); // Ensure the correct path to your User model
const bcrypt = require('bcryptjs'); // For password hashing

const Registration = async (req, res) => {

    // Destructure fields from the request body
    const { firstName, surName, email, password, matriculationNumber } = req.body;

    console.log(req.body)
    // try {

    //     // Validate that all required fields are present
    //     if (!firstName || !surName || !email || !password || !matriculationNumber) {
    //         return res.status(400).json({ message: "All fields are required." });
    //     }

    //     // Password validation: Must contain at least one letter, one number, and one special character
    //     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     if (!passwordRegex.test(password)) {
    //         return res.status(400).json({
    //             message: "Password must be at least 8 characters long and include at least one letter, one number, and one special character.",
    //         });
    //     }

    //     // Matriculation number validation: Must contain only alphabets and numbers
    //     const matriculationRegex = /^[A-Za-z0-9]+$/;
    //     if (!matriculationRegex.test(matriculationNumber)) {
    //         return res.status(400).json({
    //             message: "Matriculation number must contain only alphabets and numbers.",
    //         });
    //     }

    //     // Check if a user with the same email already exists
    //     const existingUser = await User.findOne({ email });
    //     if (existingUser) {
    //         return res.status(400).json({ message: "Email already in use." });
    //     }

    //     // Hash the password before saving
    //     const hashedPassword = await bcrypt.hash(password, 10);

    //     // Create a new user instance
    //     const newUser = new User({
    //         firstName,
    //         middleName,
    //         email,
    //         password: hashedPassword, // Store hashed password
    //         matriculationNumber,
    //     });

    //     // Save the new user to the database
    //     await newUser.save();

    //     return res.status(201).json({ message: "Account created successfully." });
    // } catch (error) {
    //     console.error("Error during registration:", error);
    //     return res.status(500).json({ message: "Internal server error." });
    // }
};

module.exports = Registration;
