// Synchronously (One by one)
// const fs = require("fs");

// const content1 = fs.readFileSync("a.txt","utf-8");
// console.log(content1);

// const content2 = fs.readFileSync("b.txt","utf-8");
// console.log(content2);

//concurrently

const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,content){
  console.log(content);
} );

fs.readFile("b.txt","utf-8",function(err,content){
  console.log(content);
});