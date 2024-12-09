// const mongoose = require('mongoose')
// require('dotenv').config()

// const { default: mongoose } = require("mongoose");

// exports.connect = () =>{
//     mongoose.connect(process.env.MONGO_URI,{
//         // useUrlParser: true, 
//         // useUniqueTopology: true
//     }
// ).then(()=> console.log("db connected sucessfully"))
//     .catch((error)=> {console.log("an error occurred", error)

//     })
// }
const mongoose = require('mongoose');

exports.connect = async () => {
  try {
    const dbURI = process.env.MONGO_URI; // Replace with your MongoDB URI
    const options = {
      useNewUrlParser: true,        // Parses MongoDB connection string correctly
      useUnifiedTopology: true,    // Uses the new MongoDB connection management engine      
    };

    await mongoose.connect(dbURI, options);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application on connection error
  }
};