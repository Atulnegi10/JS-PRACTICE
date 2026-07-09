const express = require("express");
const bodypaser = require("body-parser");

const app = express();

app.use(bodypaser.json());
// app.use(express.json);

app.post("/sum", function(req, res) {
    console.log(req.body);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);