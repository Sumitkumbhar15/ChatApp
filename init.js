const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection established");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ChatApp');
}

let allChats = [
    {
        from: "sanket",
        to: "sakshi",
        msg: "I love you",
        created_at : new Date()
    },
    {
        from: "sadashiv",
        to: "Rajkumar",
        msg: "Paisee taka ooo",
        created_at: new Date()
    },
    {
        from: "Om",
        to: "Devendra",
        msg: "mess chalu kar re bhai",
        created_at: new Date()
    }    
]

Chat.insertMany(allChats);