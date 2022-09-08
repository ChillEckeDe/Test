const express = require("express");
const app = express()
const ejs = require("ejs");
const body_parser = require("body-parser");
const path = require("path");
const sendmail = require("./functions/sendmail");
const { Script } = require("vm");

app.set("view engine", "ejs");
app.use(body_parser.urlencoded({extended:true}))
app.set('views', path.join(__dirname, './views'))
app.use('/', express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
  res.render("index",)
})

app.post("/",(req,res)=>{
  const { to,subjekt,text } = req.body 
  console.table({to,subjekt,text})
  sendmail.sendmail(to,text,subjekt)
  
})

app.listen(80,()=>{
  console.log("ready")
})