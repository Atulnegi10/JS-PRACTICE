
const fs = require("fs");

function afterreadfile(err,content){
  console.log(content);
};

fs.readFile("a.txt","utf-8",afterreadfile);