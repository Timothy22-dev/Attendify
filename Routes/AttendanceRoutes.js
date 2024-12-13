const express = require('express');
const router = express.Router();
const AttendanceController = require('../Controllers/AttendanceController');

// Routes for attendance
router.post('/create', AttendanceController.createAttendance); // Add attendance
router.get('/', AttendanceController.getAllAttendance); // Get all attendance
router.get('/:studentId', AttendanceController.getAttendanceByStudent); // Get attendance by student
router.put('/:id', AttendanceController.updateAttendance); // Update attendance
router.delete('/:id', AttendanceController.deleteAttendance); // Delete attendance

module.exports = router;
