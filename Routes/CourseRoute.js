const express = require('express');
const router = express.Router();
const {
    createCourse,
    getAllCourses,
    getCourseById,
} = require('../Controllers/CourseController');

// Route to create a new course
router.post('/create', createCourse);

// Route to get all courses
router.get('/all', getAllCourses);

// Route to get a specific course by ID
router.get('/:id', getCourseById);

module.exports = router;
