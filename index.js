const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.get("/itish", (req, res) => {
  res.json({
    name: "Itish",
    age: 24,
    profession: "Software Developer",
    hobbies: ["Coding", "Reading"],
  });
});

app.get("/", (req, res) => {
  res.send("Hello Itish Prasad");
});
app.get("/", (req, res) => {
  res.send("Hello Itish Prasad");
});

app.get("/twitter", (req, res) => {
  res.send("<h3>This is bold letter ..</h3>");
});

app.listen(port, () => {
  console.log(`App is listening in port ${port}`);
});
