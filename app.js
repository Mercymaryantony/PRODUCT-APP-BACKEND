const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
const product = require("./models/product")

app.listen(8085,()=>{
    console.log("server started")
})

app.get("/view",(req,res)=>{
    res.send("VIEW")
})

app.post("/add",(req,res)=>{
    res.send("ADD")
})

app.post("/search",(req,res)=>{
    res.send("SEARCH")
})

app.post("/delete",(req,res)=>{
    res.send("DELETE")
})