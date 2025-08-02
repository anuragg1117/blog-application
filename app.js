require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT;

app.arguments(expressLayout);
app.set("layout", "./layouts/main");
app.set("view");

app.get("", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("App listening on port ${PORT}");
});
