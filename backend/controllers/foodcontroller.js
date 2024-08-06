// import Food from "../models/food.models.js";


import fs from 'fs';
import foodModel from '../models/food.models.js';

// add food items/'///////////////

const addFood = async(req,res)=>{

    let image_fileName = `${req.file.filename}`;
    console.log(image_fileName)
    const food = new foodModel({

        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_fileName


    })
    try{
        await food.save();
        res.json({
            success:true,message:"Food Added"
        }) 
    }

    catch (error){
        console.log('your not added')
    }


    

}

// all food list

const listFood = async(req,res)=>{
    try{
        const foods = await foodModel.find({})
        res.json({
            message:"u got it all data",
            success:true,
            data:foods

        })
    }
    catch (error) {
        res.json({
            message:'faild to get data',
            error:error
        })
    }

}

const removeFood = async(req,res)=>{

    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`public/upload/${food.image}`,async()=>{

            await foodModel.findByIdAndDelete(req.body.id);
            res.json({
                success:true,message:"food Removed"
            })

        })

    }
    catch (error){
        console.log(error)
        res.json({
            message:"failed to remove data",
            error:error
        })

    }

}



export {addFood,listFood,removeFood}