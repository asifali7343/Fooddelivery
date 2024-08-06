import mongoose from 'mongoose'
import userModel from './User.model.js';
const orderSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },items:{
        type:[],
        required:true
    },amount:{
        type:Number,
        required:true
    },address:{
        type:{},
        required:true
    },status:{
        type:String,
        default:'food processing'
    },date:{type:Date,
        default:Date.now()
    },payment:{
        type:Boolean,
        default:false
    }

},{timestamps:true})

const orderModel = mongoose.model.order || mongoose.model("order",orderSchema);
export default orderModel;