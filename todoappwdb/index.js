const express = require("express");
const bcrypt = require("bcrypt");
const {UserModel,TodoModel} = require("./db")
const jwt = require("jsonwebtoken");

const JWT_SECRET = "atul123";
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anegi4607_db_user:working.123@cluster0.5pq6suh.mongodb.net/")

const app = express();
app.use(express.json());

app.post("/signup", async function(req,res){
   const email = req.body.email;
   const password = req.body.password;
   const name = req.body.name;

   const hashpassword = await bcrypt.hash(password,5);
   console.log(hashpassword);

   await UserModel.create({
    email: email,
    password: hashpassword,
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
    email : email
   });

   const passwordmatch = bcrypt.compare(password,user.password);

   if(user && passwordmatch){
    const token = jwt.sign({
       id :user._id.toString()
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

app.post("/todos",auth,async function(req,res){
   const  userID = req.userID;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
        userID,
        title,
        done
    });
   res.json(
    {
      message : "todo created"
    }
   )
});

app.get("/todos",auth,async function(req,res){
  const  userID = req.userID;
 const todos = await TodoModel.find({
        userId: userID
    });  

   res.json(
    {
      todos: todos
    }
   )
});

function auth(req,res,next){

  const token = req.headers.token;
  const response = jwt.verify(token,JWT_SECRET);

  if(response){
    req.userID = response.id;
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


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});