const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
//"mongodb://localhost/mernbackend"

mongoose.connect("mongodb+srv://mohima:mimino@my-website.tpl1nxu.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
   
}).then(()=>{
    console.log(`Connection Successful `);
}).catch((e)=>{
    console.log(`No Connection  ` + e);
})

