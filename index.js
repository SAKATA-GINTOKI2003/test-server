const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
console.log(process.env.port);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", (req, res) => {
  res.send("<h1>Hello World Running Test Server</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
