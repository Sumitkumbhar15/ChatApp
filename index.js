const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 8080 ;
const Chat = require("./models/chat.js");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");

main().then((res) => {
    console.log("connection sucessful");
})
.catch ((err) => {
    console.log(err)
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ChatApp');
}

let chat1 = new Chat({
    from : "sumit",
    to: "sanket",
    msg : "kuthe aahes",
    created_at: new Date()
})

chat1.save().then((res) => {
    console.log(res);
})

app.get("/" , (req , res) => {
    res.send("You are on home page");
})

app.listen(port , () => {
    console.log(`App listening to port number ${port}`);
})