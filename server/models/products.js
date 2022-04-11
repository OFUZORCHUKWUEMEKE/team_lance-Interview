const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productname:{type:String,required:true,unique:true},
    categoryname:{type:String,required:true},
    price:{type:String,required:true},
    status:{type:String,default:'Available',required:true}
},{timestamps:true})

const Product = mongoose.model('Product',productSchema)

module.exports = Product