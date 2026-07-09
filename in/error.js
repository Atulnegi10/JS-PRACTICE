//CALLBACK APPROACH

// const fs = require("fs");
// function afterdone(err,data){
//   if(err){
//     console.log("error while reading the file");
//   }else{
//     console.log(data);
//   }
// }
// fs.readFile("a.txt","utf-8",afterdone);

//PROMISE APPROACH

const fs = require("fs");

function readFilePromisified(filepath){
  return new Promise(function(resolve,reject){
    fs.readFile(filepath,"utf-8",function(err,data){
      if(err){
        reject("error while handling the file");
      }else{
        console.log(data);
      }
    })
  })
}
function ondone(data){
  console.log(data);
}

function onerror(err){
  console.log(err);
}

readFilePromisified("a.txt").then(ondone).catch(onerror);