const mongoose =require("mongoose")
const schema = mongoose.Schema({
    "NAME":{type:String, required:true},
    "PRICE":{type:String, required:true}
    
})
let productmodel = mongoose.model("product",schema)
module.exports = {productmodel}