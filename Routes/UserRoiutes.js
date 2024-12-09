const express = require('express');
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes'); // Adjust the path as needed

// Middleware to parse JSON
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
