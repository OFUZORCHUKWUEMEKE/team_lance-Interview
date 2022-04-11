const User = require("../models/user")
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const { genSalt, hashPassword } = require("../config/password")
const { jwtSign } = require("../config/jwtUtils")


const register = asyncHandler(async (req,res)=>{
    const {name,password} = req.body 
    const isName  = await User.findOne({name})
    if(isName){
        res.status(400)
        throw new Error('Name Already Exist')
    }
    const salt = await genSalt()
    const hashedPassword = await hashPassword(password,salt)
    const user = await User.create({name,password:hashedPassword})
    let token = await jwtSign({id:user._id,name:user.name})
    user.token = token
    await user.save()
    res.status(201).json(user)
}) 

const login = asyncHandler(async(req,res)=>{
   const {name,password} = req.body
   const user = await User.findOne({name})
   if(!user){
       res.status(400)
       throw new Error('Invalid Email Address or Password')
   }
   const isPassword = bcrypt.compare(password,user.password)
   if(!isPassword){
    res.status(400)
    throw new Error('Invalid Email Address or Password')
   }
   let token = await jwtSign({id:user._id,name:user.name})
   user.token = token
   await user.save()
   res.status(201).json(user)

})

module.exports = {login ,register}