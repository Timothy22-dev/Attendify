const Attendance = require('../Models/AttendanceModel');
const Course = require('../Models/Course');

// Create a new attendance record
exports.createAttendance = async (req, res) => {
    try {
        const { studentId, courseId, status } = req.body;

        const courseDetail = await Course.findById(courseId)
        const attendance = await Attendance.find({studentId})
const stdntStatus = attendance.status
if(stdntStatus ==="present"){
    return res.json("Student already signed attendance")
}
        const newAttendance = new Attendance({ studentId, courseId, status });
        await newAttendance.save();
        res.status(201).json({ message: 'Attendance record created successfully', newAttendance });
    } catch (error) {
        res.status(500).json({ message: 'Error creating attendance record', error });
    }
};

// Get all attendance records
exports.getAllAttendance = async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find();
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching attendance records', error });
    }
};

// Get attendance by student ID
exports.getAttendanceByStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const attendanceRecords = await Attendance.find({ studentId });
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching attendance records', error });
    }
};

// Update an attendance record
exports.updateAttendance = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedAttendance = await Attendance.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json({ message: 'Attendance record updated successfully', updatedAttendance });
    } catch (error) {
        res.status(500).json({ message: 'Error updating attendance record', error });
    }
};

// Delete an attendance record
exports.deleteAttendance = async (req, res) => {
    try {
        const { id } = req.params;
        await Attendance.findByIdAndDelete(id);
        res.status(200).json({ message: 'Attendance record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting attendance record', error });
    }
};
