const bcrypt = require('bcryptjs'); // For password comparison
const jwt = require('jsonwebtoken'); // For generating JWT tokens
const User = require('../Models/User'); // Ensure the correct path to your User model

// Secret key for JWT
const SECRET_KEY = "supper_secret_key"; // Ensure this is stored securely in production

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Invalid email or password." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // Generate a JWT token with a 1-hour expiration time
        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

        // Respond with the JWT token
        return res.status(200).json({
            message: "Login successful.",
            token,
            expiresIn: "1 hour"
        });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = Login;
