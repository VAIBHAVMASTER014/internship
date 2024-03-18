const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use("/login", express.static(path.join(__dirname, "public/login.html")));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/params/:name", (req, res) => {
  res.send(req.params.name);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
