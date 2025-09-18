const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080 ;
const Chat = require("./models/chat.js");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({ extended : true}));

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

// Create route

app.post("/chats" , (req,res) => {
    let { from , to , msg } = req.body;
    let newChat = new Chat({
        from : from ,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    newChat.save().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    res.redirect("/chats");
})

// Edit route

app.get("/chats/:id/edit",async (req , res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs" , {chat});
})

app.get("/" , (req , res) => {
    res.send("You are on home page");
})

app.listen(port , () => {
    console.log(`App listening to port number ${port}`);
})