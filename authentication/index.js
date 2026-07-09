const express = require("express");
const app = express();

app.use(express.json());
const users = [];

function generatetoken(){
  let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup", function(req,res){
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

app.post("/signin",function(req,res){
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
    const token = generatetoken();
    user.token = token;
    res.json({
      token : token
    })
   }else{
     res.status(403).send({
            message: "Invalid username or password"
        })
   }
})

app.get("/me",function(req,res){
  const token = req.headers.token;
  const toke = users.find(function(u){
    if(u.token == token){
      return true;
    }else{
      return false;
    }
   })

   if(toke){
    res.json({
      username : toke.username,
      password : toke.password
    })
   }else{
    res.json({
      message : "invalid token"
    })
   }
})

app.listen(3000);