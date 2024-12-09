const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
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