const bcrypt = require('bcrypt'); // For password comparison

const Login = async (req, res) => {
    try {
        // Destructure fields from the request body
        const { email, password } = req.body;

        // Validate that all required fields are present
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        // Check if a user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Invalid email or password." });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // If authentication is successful, respond with a success message
        return res.status(200).json({ message: "Login successful.", user });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = Login;
