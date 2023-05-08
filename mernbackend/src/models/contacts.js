const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const contactSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    text : {
        type : String,
        required : true
    }
    // pswd : {
    //     type : String,
    //     required : true
    // }

})


// now we need to create a collection 

const Contact = new mongoose.model("contact", contactSchema);

module.exports = Contact;