const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const verifyToken =asyncHandler(
    async(req,res,next) =>{
        const payload = await req.headers.authorization
        // console.log(payload)
         if(!payload){
             res.status(403)
             throw new Error('User not Authenticated')
         }
         const token = payload.split(' ')[1]
         console.log(token)
         try {
             const decoded = jwt.verify(token,process.env.JWT_SECRET)
             req.user = decoded
             next()

         } catch (error) {
            res.status(403)
            throw new Error('Invalid Token')
         }
    }
) 

module.exports = verifyToken

