const express = require("express");
const {UserModel,TodoModel} = require("./db")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "atul123";

const app = express();
app.use(express.json());

app.post("/signup", async function(req,res){
   const email = req.body.email;
   const password = req.body.password;
   const name = req.body.name;

   await UserModel.create({
    email: email,
    password: password,
    name : name
   });

   res.json({
    message: "user logged in"
   })

});

app.post("/signin", async function(req,res){
   const email = req.body.email;
   const password = req.body.password;

   const user =  await UserModel.findOne({
    email : email,
    password : password
   });

   if(user){
    const token = jwt.sign({
       id :user._id
    },JWT_SECRET);
    res.json({
      token : token
    })
   }else{
    res.status(403).json({
      message : "incorrect credentials"
    })
   }
});

app.post("/todos", function(req,res){
  
});

app.get("/todos", function(req,res){
  
});

function auth(req,res,next){

  const token = req.headers.token;
  const response = jwt.verify(token,JWT_SECRET);

  if(response){
    req.userID = token.userID;
    next();
  }else{
    res.status(403).json({
      message : "incorrect credentials"
    })
  }
  }

  module.exports = {
    auth,
    JWT_SECRET
}


app.listen(3000);