const fs = require('fs');

//Sync ---Blocking Request
// fs.writeFileSync('./test.txt',"Hey There");

//Async -- non-Blocking Request.
// fs.writeFile('./test.txt',"Hey There Async", (err)=>{
// });

// const result = fs.readFileSync("./contacts.txt","utf-8")
// console.log (result);

// We cannot return directly in Async tasks it always expect callbacks for error and results.
// fs.readFile('./contacts.txt',"utf-8", (err,result)=>{
//     if(err){
//         console.log('Error',err)
//     }
//     else{
//         console.log(result);
//     }
// })

fs.appendFileSync("test.txt",`${Date.now()}\n`);