const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    email: String,
    password: String,
    matriculationNumber: String,
    role:{
        type: String,
        enum:["Student","Lecturer"],
        default: "Student"
    }


})

module.exports = mongoose.model("User", UserSchema)