const express = require('express');

const app = express();

const path=require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
app.use(express.urlencoded());

const run = async() =>{
    await mongoose.connect('mongodb+srv://HiteshLavdu:YdyrKigEQszqoMfw@cluster0.7pfxpj7.mongodb.net/').then(()=>{
        console.log("Connected");
    }).catch((error)=>{
        console.log(error);
    })
    
    let port=80;
    
    
    app.get("/",(req,res)=>{
        res.send("Working")
    })
    
    app.listen(port,()=>{
        console.log(`Listen to : http://localhost:80`);
    })

}

run();
