const express = require("express");
const jwt = require("javawebtoken");
const path = require("path");

const app = express();

app.use(express.json());
const JWT_SECRET = "randomatul";
const users = [];

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

app.post("/signin",function(req,res){

    const usernme = req.body.usernmae;
    const password = req.body.password;

    const founduser = users.find(u => u.username === username && u.password === password);

    if(founduser){
        const token = jwt.sign({username},JWT_SECRET);

        res.json({
            token: token
        });
    }else{
        res.json({
            message:"invalid username or password"
        })
    }
});

function auth(req,res,next){
    const token = req.headers.token;

    const decoded = jwt.verify(token,JWT_SECRET);
    req.usernmae = decoded.username;
    next();
}

app.post("/todo",function(req,res){

    const title = req.body.title;

    const user = users.find(u => u.username === req.username);

    user.todos.push(({
        id:Date.now(),
        title:title,
        done: false
    }));

    res.json({
        message: "todo added"
    })
});

app.get("/todo",function(req,res){

    const user = users.find(u => u.username === req.username);

    res.json(
        user.todos
    )
});

app.put("/todo", auth, function(req, res) {

    const id = req.body.id;

    const user = users.find(
        u => u.username === req.username
    );

    const todo = user.todos.find(
        t => t.id === id
    );

    if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    todo.done = true;

    res.json({
        message: "Todo marked as done"
    });

});