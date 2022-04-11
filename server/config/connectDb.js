const mongoose = require('mongoose')

const connectDb = async ()=>{
    await mongoose.connect(process.env.MONGO_URI,()=>{
        console.log('database connected')
    })
}

module.exports = connectDb