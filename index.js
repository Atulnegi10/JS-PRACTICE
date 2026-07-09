const express = require("express");
const app = express();

app.get("/add/:firstArg/:secondArg", (req, res) => {
  const a = Number(req.params.firstArg);
  const b = Number(req.params.secondArg);

  res.json({
    ans: a + b
  });
});

app.get("/sub", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    ans: a - b
  });
});

app.get("/multiply", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  res.json({
    ans: a * b
  });
});

app.get("/division", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (b === 0) {
    return res.status(400).json({ error: "Division by zero" });
  }

  res.json({
    ans: a / b
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
