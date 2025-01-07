const express = require('express');
const { generateCode, verifyAttendance } = require('../Controllers/CodeController'); // Adjust the path as needed

const router = express.Router();

// Routes
router.post('/generate-code', generateCode); // Generate attendance code
router.post('/verify-attendance', verifyAttendance); // Verify attendance

module.exports = router;
