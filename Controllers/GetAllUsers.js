const GetAllUsers = async (req, res) => {
    try {
        // Fetch all users
        const users = await User.find();

        // Respond with the users
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = GetAllUsers;
