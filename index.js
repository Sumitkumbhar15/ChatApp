const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080 ;
const Chat = require("./models/chat.js");
const { log } = require("console");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));

main().then(() => {
    console.log("connection established");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ChatApp');
}

// Index route

app.get("/chats" , async (req , res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})

// New route

app.get("/chats/new", (req,res)=>{
    console.log("working");
    res.render("new.ejs")
})

app.get("/" , (req , res) => {
    res.send("You are on home page");
})

app.listen(port , () => {
    console.log(`App listening to port number ${port}`);
})