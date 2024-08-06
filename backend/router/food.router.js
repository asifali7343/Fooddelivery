// import express from 'express';
import {Router} from 'express';
import {addFood,listFood,removeFood} from '../controllers/foodcontroller.js'
import multer from 'multer'

import path from 'path'

const foodRouter= Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"upload",
    filename:(req,file,cb)=>{
        // return cb(null,`${Date.now()}${file.originalname}`)
        return cb(null,`${Date.now()}_${file.originalname}`);

    }
})

const upload = multer({storage:storage})



foodRouter.route('/add').post(upload.single("image"),addFood)
foodRouter.route('/allfoods').get(listFood)
foodRouter.route('/remove').post(removeFood)

export  {foodRouter,upload}





