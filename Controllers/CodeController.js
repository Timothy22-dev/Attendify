const bcrypt = require('bcryptjs');
const GenerateCode = require('../Models/CodeModel'); // Import the GenerateCode model
const User = require('../Models/User');

// Controller to generate the code
const generateCode = async (req, res) => {
    const { userId } = req.body;

    try {
        // Generate a random code
        const rawCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        const hashedCode = await bcrypt.hash(rawCode, 10);

        // Set expiration time (e.g., 1 hour)
        const expirationTime = Date.now() + 3600 * 1000;

        const user = await User.findById(userId)
const matricNumber = user.matriculationNumber
        // Save the code in the database
        const newCode = new GenerateCode({
            code: hashedCode,
            matriculationNumber: matricNumber,
            expiresAt: new Date(expirationTime),
        });

        await newCode.save();

        res.status(201).json({
            message: 'Code generated successfully',
            code: rawCode, // Send raw code to the client
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to verify attendance
const verifyAttendance = async (req, res) => {
    const { matriculationNumber, code } = req.body;

    try {
        // Find the code in the database
        const generatedCode = await GenerateCode.findOne({ user: matriculationNumber });

        if (!generatedCode) {
            return res.status(404).json({ message: 'Code not found for this user' });
        }

        // Check if the code has expired
        if (new Date() > generatedCode.expiresAt) {
            return res.status(400).json({ message: 'Code has expired' });
        }

        // Compare the provided code with the hashed code in the database
        const isCodeValid = await bcrypt.compare(code, generatedCode.code);

        if (!isCodeValid) {
            return res.status(400).json({ message: 'Invalid code' });
        }

        // Code is valid - Attendance can be marked
        res.status(200).json({ message: 'Attendance verified successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { generateCode, verifyAttendance };
