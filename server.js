const express = require('express')
require('dotenv').config();

const app = express();

app.get("/",(req,res)=>{
    console.log("hey this is your get route")
    res.status(400).send("hey there your are live congrats")
})


app.listen(3000,()=>{
    console.log("your server is live")
})
