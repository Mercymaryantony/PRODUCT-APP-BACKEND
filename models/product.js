const mongoose =require("mongoose")
const schema = mongoose.Schema({
    "PRODUCT":String,
        "PRICE":String
    
})
let productmodel = mongoose.model("product",schema)
module.export = {productmodel}