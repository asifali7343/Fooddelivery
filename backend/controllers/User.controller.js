import userModel from "../models/User.model.js";

import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import validator from "validator"

// dotenv.config()
const loginUser = async(req,res)=>{

    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:'user id is not available'})
        }
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({
                success: false,
                message :'password is not correct'
            })
        }

        const token = createToken(user._id);
        res.json({
            success:true,token
        })

        
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message: "type error"
        })
        
    }
    
        
    

}

const createToken = (id)=>{
    return jwt.sign({
        id
    },process.env.JWTSECRET)

}

const registerUser = async(req,res)=>{

    const {name,password,email} = req.body;

    try {

        //checking user is alreaay exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"user email id is already exists"})

        }
        // validating email format & strong password
        if(!validator.isEmail(email)) {
            return res.json({success:false,message:"User Email is not correct"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"please enter a strong password"})
        }

        const salt =  await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashPassword
        })
       const user =  newUser.save()
       const token = createToken(user._id)
       res.json({
        success:true,
        token
       })
        
    } catch (error) {

        console.log(error)
        res.json({
            success:false,
            message:error
        })

        
    }

    
        
    

}

export  {loginUser,registerUser}