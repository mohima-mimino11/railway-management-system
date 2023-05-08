const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const registrationSchema = new mongoose.Schema({
    uname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    password : {
        type : String,
        required : true
    }
    // pswd : {
    //     type : String,
    //     required : true
    // }

})


// now we need to create a collection 

const Register = new mongoose.model("Register", registrationSchema);

module.exports = Register;