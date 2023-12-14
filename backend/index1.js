const express = require('express');

const app = express();

const path=require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
app.use(express.urlencoded());
app.use(bodyParser.json());


const run = async() =>{
    await mongoose.connect('mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2/student').then(()=>{
        const userSchema = new mongoose.Schema({
            email:String,
            password:String
        })

        const model = mongoose.model('Info',userSchema);
        console.log("Connected");
        let port=80;
    
    
        app.post("/create",async(req,res)=>{
            const emails = req.body.email;
            const passwords = req.body.password;
            // const create = await model.create({email:emails,password:passwords});
            res.send(200)
        })
        
        app.listen(port,()=>{
            console.log(`Listen to : http://localhost:80`);
        })
    }).catch((error)=>{
        console.log(error);
    })

}

run();