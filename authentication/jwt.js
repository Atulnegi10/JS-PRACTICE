// Signing means:

// The server adds a digital signature to the token so that anyone can verify it hasn't been modified.

// It does not hide the data.

// Real-life analogy

// Imagine your college issues a certificate.

// The certificate says:

// Name: Atul
// Course: B.Tech CSE

// Then the college principal signs it.

// Now anyone can read the certificate, but they know it is genuine because of the principal's signature.

// If someone changes:

// Course: MBA

// the principal's signature is no longer valid.

// JWT works the same way.

const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const JWT_SECRET = "randomatul"
const app = express();

const users = [];

app.use(express.json());

function logger(req,res,next){
  console.log(req.method + "request came");
  next();
}

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup",logger, function(req,res){
   const username = req.body.username;
   const password = req.body.password;

   users.push({
    username : username,
    password : password
   })

   res.json({
    message : "user signed in"
   })
})

app.post("/signin",logger,function(req,res){
   const username = req.body.username;
   const password = req.body.password;
   
   //or iterate through users to find 
   const user = users.find(function(u){
    if(u.username == username && u.password == password){
      return true;
    }else{
      return false;
    }
   })
   
   if(user){
    const token = jwt.sign({
      username : username,
    },JWT_SECRET);

    res.json({
      token : token
    })
   }else{
     res.status(403).send({
            message: "Invalid username or password"
        })
   }
})

function auth(req,res,next){
  const token = req.headers.token;
  const decodedinfo = jwt.verify(token,JWT_SECRET);

  if(decodedinfo.username ){
    req.username = decodedinfo.username;
    next();
  }else{
     res.json({
      message : "not logged in"
     })
  }
}


app.get("/me",logger,auth,function(req,res){
  
  const toke = users.find(function(u){
    if(u.username == req.username){
      return true;
    }else{
      return false;
    }
   })

    res.json({
      username : toke.username,
      password : toke.password
    })
})


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});