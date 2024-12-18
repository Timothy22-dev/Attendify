const Registration = async (req, res) => {
    const { firstName, surName, email, password, matriculationNumber } = req.body;

    try {
        // Ensure all required fields are present
        if (!firstName || !surName || !email || !password || !matriculationNumber) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Matriculation number validation
        const matriculationRegex = /^[A-Za-z0-9]+$/;
        if (!matriculationRegex.test(matriculationNumber)) {
            return res.status(400).json({
                message: "Matriculation number must contain only alphabets and numbers.",
            });
        }

        // Check for existing user by email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use." });
        }

        // Hash the password without additional validation
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save the new user
        const newUser = new User({
            firstName,
            surName,
            email,
            password: hashedPassword,
            matriculationNumber,
        });

        await newUser.save();

        return res.status(201).json({ message: "Account created successfully." });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};
