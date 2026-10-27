


const http = require("http");
const fs = require("fs")
const myServer = http.createServer((req,res)=>{
    console.log('New Req. Required');
    const log = `${Date.now()}: ${req.url} New Request Received \n`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch (req.url) {
            case '/' : 
        res.end("Home Page")
        break;
        case '/about':
        res.end("Welcome to About Page ");
        break;
        default:
            res.end('Hello from Server')
        }
    })
});

myServer.listen(8000,()=>{
    console.log("Server Started!!")
})