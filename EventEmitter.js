const express = require('express')
const EventEmitter = require('events')
const app = express()
const event = new EventEmitter()

let count=0

event.on("countAPI",()=>{
    count++
    console.log("event called",count);
})

app.get("/",(req,resp)=>{
    resp.send("api called")
    event.emit("CountAPI") 
})
app.get("/search",(req,resp)=>{
    resp.send("search api called")
    event.emit("CountAPI") 
})
app.get("/about",(req,resp)=>{
    resp.send("about api called")
    event.emit("CountAPI") 
})