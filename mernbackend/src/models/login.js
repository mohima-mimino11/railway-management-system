const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const loginSchema = new mongoose.Schema({
    uname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: false
    },
    pswd : {
        type : String,
        required : true
    }
    

})


// now we need to create a collection 

const Login = new mongoose.model("Login", loginSchema);

module.exports = Login;

// const user = sessionStorage.setItem('uname', loginSchema.uname)
// const username = sessionStorage.getItem('uname');
// document.getElementById('uname').innerHTML = username;