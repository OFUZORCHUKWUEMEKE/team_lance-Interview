const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/products");


const getProduct = expressAsyncHandler(async(req,res)=>{
    try {
        const product = await Product.find()
        // const product = await Product.deleteMany()
        res.status(200).json(product)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
    
})

const addProduct = expressAsyncHandler(async(req,res)=>{
    try {
        const {productname,categoryname,price,status} = req.body
        console.log(req.body)
        const product = new Product({productname,categoryname,price,status})
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
   
})

const deleteProduct = expressAsyncHandler(async(req,res)=>{
    try {
        const {id} = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).json('successfully deleted an Id')
        console.log(`successfully deleted id ${id}`) 
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

const updateProduct = expressAsyncHandler(async(req,res)=>{
    try {
        const {id}= req.params
        await Product.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json('successfully updated')
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports ={updateProduct,deleteProduct,addProduct,getProduct}