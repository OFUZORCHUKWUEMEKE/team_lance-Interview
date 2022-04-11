const bcrypt = require('bcryptjs')

const genSalt = async ()=>{
    return await bcrypt.genSalt()
}

const hashPassword =  async (password,salt)=>{
  return await bcrypt.hash(password,salt)
}

module.exports ={genSalt,hashPassword}