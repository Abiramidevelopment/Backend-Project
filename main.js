const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { log } = require('console');
mongoose.connect("mongodb://127.0.0.1:27017/backendProjectDatabase",{}).then(()=>{
    console.log("Database Connected");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.use('/',require('./server/routes/routes'))

app.listen(2003,()=>{
    console.log("Check");
})