const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const app = express();

app.use(express.json());
const JWT_SECRET = "randomatul";
const users = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

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

// Signin
app.post("/signin", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(
        u => u.username === username &&
             u.password === password
    );

    if (foundUser) {

        const token = jwt.sign(
            { username },
            JWT_SECRET
        );

        res.json({
            token: token
        });

    } else {

        res.status(403).json({
            message: "Invalid username or password"
        });

    }

});

// Authentication Middleware
function auth(req, res, next) {

    const token = req.headers.token;

    const decoded = jwt.verify(token, JWT_SECRET);

    req.username = decoded.username;

    next();

}

// Create Todo
app.post("/todo", auth, function(req, res) {

    const title = req.body.title;

    const user = users.find(
        u => u.username === req.username
    );

    user.todos.push({
        id: Date.now(),
        title: title,
        done: false
    });

    res.json({
        message: "Todo added"
    });

});

// Get Todos
app.get("/todo", auth, function(req, res) {

    const user = users.find(
        u => u.username === req.username
    );

    res.json(user.todos);

});

// Mark Todo Done
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

// Delete Todo
app.delete("/todo", auth, function(req, res) {

    const id = req.body.id;

    const user = users.find(
        u => u.username === req.username
    );

    user.todos = user.todos.filter(
        todo => todo.id !== id
    );

    res.json({
        message: "Todo deleted"
    });

});

// Update Todo
app.put("/todo/update", auth, function(req, res) {

    const id = req.body.id;
    const newTitle = req.body.title;

    const user = users.find(function(u) {
        return u.username === req.username;
    });

    const todo = user.todos.find(function(t) {
        return t.id === id;
    });

    if (!todo) {

        return res.status(404).json({
            message: "Todo not found"
        });

    }

    todo.title = newTitle;

    res.json({
        message: "Todo updated"
    });

});


app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});