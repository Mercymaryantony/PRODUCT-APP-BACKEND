const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
const {productmodel} = require("./models/product")
mongoose.connect("mongodb+srv://mercy1112:mercy1112@cluster0.8x8j3ya.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0")
app.use(express.json())

app.listen(8084,()=>{
    console.log("server started")
})

app.get("/view",(req,res)=>{
    productmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.send("error")
        }
    )
})

app.post("/add",(req,res)=>{
    let input = req.body
    let product = new productmodel(input)
    console.log(product)
    product.save()
    res.json({"status":"ADD"})
})

app.post("/search",(req,res)=>{
    res.send("SEARCH")
})

app.post("/delete",(req,res)=>{
    res.send("DELETE")
})