const Attendance = require('../models/AttendanceModel');
const Code = require('../models/CodeModel');

// Function to verify attendance
exports.verifyAttendance = async (req, res) => {
    const { userId, code } = req.body;

    try {
        // 1. Find the student by matriculation number
        const student = await User.findById(userId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // 2. Get the saved code for this student
        const savedCode = await Code.findOne({ code});
        if (!savedCode) {
            return res.status(404).json({ message: 'Code not found for this student' });
        }

        // 3. Check if the code matches
        const isCodeValid = await bcrypt.compare(code, savedCode.code);
        if (!isCodeValid) {
            return res.status(400).json({ message: 'Invalid code' });
        }

        // 4. Check if the code has expired
        if (Date.now() > savedCode.expiresAt) {
            return res.status(400).json({ message: 'Code has expired' });
        }

        // 5. Mark attendance
        const newAttendance = new Attendance({
            student: student._id,
            date: new Date(),
        });

        await newAttendance.save();

        res.status(200).json({ message: 'Attendance signed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
