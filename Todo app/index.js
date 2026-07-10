const express = require("express");
const jwt = require("javawebtoken");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname+"index.html"));
})

app.post("/signup", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(u => u.username === username);

    if (foundUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    users.push({
        username,
        password,
        todos: []
    });

    res.json({
        message: "Signup successful"
    });
});