const User = require('../Models/User');

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

const GetSingleUser = async (req, res) => {
    try {
        const {userId} = req.params
        // Fetch all users
        const user = await User.findById(userId);

        // Respond with the users
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};


const DeleteUsers = async (req, res) => {
    try {
        // Delete all users from the database
        await User.deleteMany();

        // Respond with a success message
        return res.status(200).json({ message: "All users have been deleted successfully." });
    } catch (error) {
        console.error("Error deleting users:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};


module.exports = {GetAllUsers, GetSingleUser, DeleteUsers};
