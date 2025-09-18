const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080 ;
const Chat = require("./models/chat.js");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");

app.get("/" , (req , res) => {
    res.send("You are on home page");
})

app.listen(port , () => {
    console.log(`App listening to port number ${port}`);
})