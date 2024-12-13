const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, required: true,
        enum: ["present", "absent"],
        default: "absent"
     },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    createdAt: {type: Date}
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
