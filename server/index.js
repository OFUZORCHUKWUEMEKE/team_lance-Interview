const express = require('express')

const dotenv = require('dotenv')

const cors = require('cors')

const authRoute = require('./routes/auth')

const userRoutes = require('./routes/user')

const productRoutes = require('./routes/product')

const connectDb = require('./config/connectDb')

dotenv.config()

connectDb()


const app = express()

app.use(express.json())


app.use('/api/auth',authRoute)

app.use('/api/user',userRoutes)

app.use('/api/product',productRoutes)

app.get('/',async(req,res)=>{
    try {
        res.status(200).json('Thank God for His Mercies Endureth Forever')
    } catch (error) {
        console.log(error)
    }
 
})

app.listen(8080,()=>console.log('Server Running On PoRT 8080'))

