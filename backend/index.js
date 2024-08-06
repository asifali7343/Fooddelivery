import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import multer from 'multer'
import { connectDB } from './config/db.js'
import {foodRouter} from './router/food.router.js'
import userRouter from './router/User.route.js'
import cartRouter from './router/Cart.router.js'
import orderRouter from './router/Order.router.js'
import bodyParser from 'body-parser'
// import foodRouter from './router/foodroutes.js'


dotenv.config();


const app = express();


app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

connectDB().then((responce)=>{
    console.log('your devices is connected to the database and' + process.env.PORT)
}).catch((Error)=>{
    console.log('device is not connected to the database ' + Error)
})

// api endpoints
// app.use('/api/food',foodRouter)

app.use('/api/food',foodRouter)
app.use("/images",express.static('upload'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get('/',(req,res)=>{
    res.send('your App is running')
})

app.listen(process.env.PORT,()=>{
    console.log('your device is runnin on port :' + process.env.PORT)  
})

export default app;
