const { configDotenv } = require("dotenv");
const express = require("express");
const app = express();

configDotenv();
const Port = process.env.PORT 


app.get('/',(req,res)=>{
    res.send("Hi!! How are you?")
})

app.get('/twitter', (req,res)=>{
    res.send("Alishadotcom")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login to this page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Alisha Bilandi</h2>')
})

app.listen(Port,()=>{
    console.log(`Server Started at ${Port}`);
})

