
// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 
// It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
// async/await is essentially syntactic sugar on top of Promises. 


// function setTimeoutPromisified(ms){
//   return new Promise(resolve => setTimeout(resolve,ms));
// }

// async function solve(){
//   await setTimeoutPromisified(1000);
//   console.log("hi");
//   await setTimeoutPromisified(3000);
//   console.log("hello");
//   await setTimeoutPromisified(5000);
//   console.log("hello there");
// }
// solve();

const fs = require("fs");

function cleanfile(filepath,cb){
  return new Promise( function(resolve){
    fs.readFile(filepath,"utf-8",function(err,data){
      data = data.trim();
      fs.writeFile(filepath,data,function(){
       resolve();
      });
    });
  });
}

async function ondone(){
  await cleanfile("a.txt");
  console.log("done cleaning the file");
}

ondone();