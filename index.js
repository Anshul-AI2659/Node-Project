


// const http = require("http");
// const fs = require("fs")
const express = require("express");
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/node-app-1')
.then(()=>{console.log("MongoDb Connected")})
.catch((err)=>{console.log("MongoDb Error",err)});

//Schema
const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    }
});
const User = mongoose.model("user",userSchema);



// Middleware - Plugin
app.use(express.urlencoded({urlencoded:false}))

app.use((req,res,next)=>{
    console.log("Hello from Middleware 1");
    next();
})

// app.get("/",(req,res)=>{
//     return res.end("Hello from Home Page");
// });
// app.get("/about",(req,res)=>{
//     return res.end("Hello from About Page"+" Hey "+req.query.name + " you are "+ req.query.age +" years of age");
// })
// const myServer = http.createServer(app)
    // console.log('New Req. Required');
    // const log = `${Date.now()}: ${req.url} New Request Received \n`
    // fs.appendFile("log.txt",log,(err,data)=>{
    //     switch (req.url) {
    //         case '/' : 
    //     res.end("Home Page")
    //     break;
    //     case '/about':
    //     res.end("Welcome to About Page ");
    //     break;
    //     default:
    //         res.end('Hello from Server')
    //     }
    // })

// myServer.listen(8000,()=>{
//     console.log("Server Started!!")
// })

// GET /api/users - List all the users JSON data.
app.post("/api/users",(req,res)=>{
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title){
        return res.status(400).json({msg: "All fields are required"});
    }
    users.push({...body,id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json(users)
    })
})

// GET /users HTML Document Render.
app.get("/users",(req,res)=>{
    const html = `<ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html);
})

//GET /api/users/1 - Get the user with ID 1.
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id ===id);
    return res.json(user)
})
 
app.listen(PORT,()=>{
    console.log("Server Started at Port : ",PORT);
})