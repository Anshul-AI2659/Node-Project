


// const http = require("http");
// const fs = require("fs")
const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    return res.end("Hello from Home Page");
});
app.get("/about",(req,res)=>{
    return res.end("Hello from About Page"+" Hey "+req.query.name + " you are "+ req.query.age +" years of age");
})
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
app.listen(8000,()=>{
    console.log("Congrats, Server Started !!");
})