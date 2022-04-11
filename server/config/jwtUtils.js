const jwt = require('jsonwebtoken')

const jwtSign = async({id,name})=>{
    return await jwt.sign({id,name},process.env.JWT_SECRET,{expiresIn:'3d'})
}

module.exports = {jwtSign}