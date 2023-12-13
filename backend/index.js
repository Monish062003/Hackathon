const express = require('express');

const app = express();

const path=require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Monish:mmonish875@cluster0.7pfxpj7.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("Connected");
}).catch((error)=>{
    console.log(error);
})

app.use(express.urlencoded());
let port=80;


app.get("/",(req,res)=>{
    res.send("Yeahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
})

app.listen(port,()=>{
    console.log(`Listen to : http://localhost:80`);
})