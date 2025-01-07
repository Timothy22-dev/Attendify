const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
    code: { 
        type: String, 
        required: true 
    }, // Hashed code
    // user: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'User', 
    //     required: true 
    // }, // Reference to the student (User model)
    matriculationNumber: { 
        type: String, 
    },
    expiresAt: { 
        type: Date, 
        required: true 
    }, // Expiration time for the code
});

module.exports = mongoose.model('GenerateCode', codeSchema);
