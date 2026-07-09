const express = require("express");
const app = express();

let requestcount = 0;

function requestincreaser(req,res,next){
    requestcount = requestcount+1;
    console.log("total requests" + requestcount);
    if(requestcount>3){
    res.json({
      message : "i ended the request early",
    });
  }else{
    next();
  }
}


function requesthandler(req,res){
  const a = Number(req.params.firstArg);
  const b = Number(req.params.secondArg);

  res.json({
    ans: a + b
  });

}
app.get("/add/:firstArg/:secondArg",requestincreaser,requesthandler);

app.listen(3000);

  