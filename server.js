require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");

// Import existing routes
const registerRoute = require('./Routes/AuthRoutes');
const courseRoutes = require('./Routes/CourseRoute');
const attendanceRoutes = require('./Routes/AttendanceRoutes'); // Add this line for attendance routes
const generateCodeRoutes = require('./Routes/GenerateCodeRoutes'); // Import the Generate Code routes

const { PORT } = process.env;
const app = express();
const server = http.createServer(app);

// Configure CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/public/uploads", express.static(path.join("public", "upload")));

// Middleware for JSON and URL encoding
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// Connect to the database
require("./DBConfigs/DB").connect();

// Test route
app.get("/", (req, res) => {
    res.send("<h1>Attendify</h1>");
});

// Add the course routes
app.use('/api/courses', courseRoutes);

// Add authentication routes
app.use('/api/auth', registerRoute);

// Add attendance routes
app.use('/api/attendance', attendanceRoutes);

// Add generate code routes
app.use('/api/generatecode', generateCodeRoutes); // Add this line

// Start the server
const APP_PORT = PORT || 4000;
server.listen(APP_PORT, () => {
    console.log(`Server Started on port ${APP_PORT}`);
});
