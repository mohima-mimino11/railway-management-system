const express = require('express');
const path = require("path");
const app = express();
const hbs = require("hbs");
// const bodyParser = require('body-parser');
const {json} = require("express");


require("./db/conn");
const Register = require("./models/registers");
const Contact = require("./models/contacts")
const Login = require("./models/login")


const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public"); 

const template_path = path.join(__dirname, "../templates/views");

const partials_path = path.join(__dirname, "../templates/partials");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// console.log(path.join(__dirname, "../public"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine", "hbs");


app.set("views", template_path);
hbs.registerPartials(partials_path);

// app.engine(
//     "hbs",
//     handlebars({
//       layoutsDir: template_path,
//       partialsDir: partials_path, 
//       extname: ".hbs", //expected file extension for handlebars files
//       defaultLayout: "layout" //default layout for app, general template for all pages in app
//     })
// );


let user;
let newUser;

app.get("/", (req, res)=>{
    res.render("index");
});



app.get("/register", (req, res)=>{
    res.render("../templates/views/register", {newUser});
  

    
    
})

app.get("/profile", (req, res)=>{
    res.render("profile")
   
})

app.get("/contact", (req, res)=>{
    res.render("contact");
    
})

app.get("/login", (req,res)=>{
    res.render("login")
})

app.get("/profile-show", (req,res)=>{
    // console.log(user);
    res.render("profile-show", {user})
})

// create a new user in our database mean register
app.post("/register", async (req, res)=>{
   try {
       
      
            const registration = new Register({
                uname : req.body.uname,
                email : req.body.email,
                password : req.body.password,
               
                

            })
        newUser = registration;
        const registered = await registration.save();
        res.status(201).redirect('/login');
        

       

   } catch (error) {
        console.log(error);
        res.status(400).send(error)
   }
    
})
// user login
app.post("/login", async (req, res)=>{
    try {
        
        //  if(newUser.password === user.pswd ){
             const login = new Login({
                 uname : req.body.uname,
                 email : req.body.email,
                 pswd: req.body.pswd,
                })
         
         const logged = await login.save();
         user = {uname: req.body.uname, email: req.body.email,
        };
        
         res.status(201).redirect('/profile-show');
        // console.log(req.body.pswd, newUser.password);
 
        //  }else{
        //      res.send("passwords are not matching");
        //      console.log(req.body.uname);
        //      console.log(req.body.email);
        //  }
         
 
    } catch (error) {
         console.log(error);
         res.status(400).send(error)
    }
     
 })

 // current user profile showing
//  app.post("/profile-show"){

//  }






app.post("/contact", async (req, res)=>{
    try {
        
        
             const contacts = new Contact({
                 fullname : req.body.fullname,
                 email : req.body.email,
                 text : req.body.text
                 
                 
 
             })
         
         const contactCollected = await contacts.save();
         res.status(201).redirect('/');
        
 
    } catch (error) {
         res.status(400).send(error)
    }
     
 })

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
} )