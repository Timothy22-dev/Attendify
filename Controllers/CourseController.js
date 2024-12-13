const Course = require('../Models/Course');
const coursesController = require('../Controllers/CourseController');


// Create a new course
const createCourse = async (req, res) => {
    try {
        const { courseName, lecturerName, startTime, endTime, venue } = req.body;

        // Validate that all fields are provided
        if (!courseName || !lecturerName || !startTime || !endTime || !venue) {
            return res.status(400).json({
                message: 'All fields are required: courseName, lecturerName, startTime, endTime, venue',
            });
        }

        const newCourse = new Course({
            courseName,
            lecturerName,
            startTime,
            endTime,
            venue,
        });

        await newCourse.save();

        res.status(201).json({
            message: 'Course created successfully',
            course: newCourse,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating course',
            error: error.message,
        });
    }
};

// Get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching courses',
            error: error.message,
        });
    }
};

// Get a specific course by ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({
                message: 'Course not found',
            });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching course',
            error: error.message,
        });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
};
