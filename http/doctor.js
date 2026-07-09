const express = require("express");
const app = express();

const user = [{
    name : "name",
    kidneys : [{
      healthy : false
    }]
}];

app.use(express.json());

app.get("/", function(req,res){
 const johnkidneys = user[0].kidneys;
 const numberofkidneys = johnkidneys.length;
 let healthykidneys = 0;
 for(let i=0;i<numberofkidneys;i++){
  if(johnkidneys[i].healthy){
    healthykidneys = healthykidneys +1;
  }
 }
 const unhealthykidneys = numberofkidneys - healthykidneys;
 res.json({
  numberofkidneys,
  healthykidneys,
  unhealthykidneys
 })
});

app.post("/", function(req,res){
  const ishealthy = req.body.ishealthy;
  user[0].kidneys.push({
    healthy : ishealthy
  })
  res.json({
    msg:"done!!"
  })
})

app.put("/", function(req,res){
  for(let i=0;i<user[0].kidneys.length;i++){
    user[0].kidneys[i].healthy = true;
  }
  res.json({
  });
})

app.delete("/", function(req,res){
  const newkidneys = [];
  for(let i=0;i<user[0].kidneys.length;i++){
    if(user[0].kidneys[i].healthy){
      newkidneys.push({
        healthy : true
      })
    }
  }
  user[0].kidneys = newkidneys;
  res.json({
    msg : "done"
  })
})

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
