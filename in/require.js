// const { log } = require("console");
// const fs = require("fs");

// const content = fs.readFileSync("a.txt","utf-8");
// // fs.readFileSync() reads a file synchronously (blocking operation).
// // "a.txt" → name of the file to read (must exist in the same folder).
// // "utf-8" → encoding format, so the file is read as text (string).
// // UTF → Unicode Transformation Format
// // 16 → uses 16 bits (2 bytes) per code unit
// // LE → Little Endian (least-significant byte first)
// // So utf-16le stores text using 2 bytes at a time, with bytes written in little-endian order.
// console.log(content);



const fs = require("fs");

function cleanfile(filepath,cb){
  fs.readFile(filepath,"utf-8",function(err,data){
    data = data.trim();
    fs.writeFile(filepath,data,function(){
      cb();
    });
  });
}

function ondone(){
  console.log("sucessfully trimed");
  }

  cleanfile("a.txt",ondone);