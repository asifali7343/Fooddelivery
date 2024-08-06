import userModel from "../models/User.model.js";

// add items to user cart
const addToCart = async(req,res)=>{
    
    try{
    
        let userData = await userModel.findById(req.body.userId)
        console.log(`userData : ${userData}`)
        let cartData = await userData.cartData;
        console.log(`cartData:${cartData}`)

        if(!cartData[req.body.itemId])
            {
                cartData[req.body.itemId] = 1

            }
            else{
                cartData[req.body.itemId] += 1;
            }

            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({
                success:true,message:"Added To Cart"
            })

        }       
    catch (error){
            res.json({
                success:false,message:"Error"
            })

    }



}

// remove items from usercart

const removeFromCart = async(req,res)=>{

    try{

        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if(cartData[req.body.itemId]>0)
                        {
                                            
                            cartData[req.body.itemId] -= 1;
    
                         }
                         

        await userModel.findByIdAndUpdate(req.body.userId,{cartData})

        res.json({
            success:true,message:"Removed from Cart"
        })





    }catch(error){
        console.log(error)
        res.json({
            success:false,
            message:error
        })


    }


}

// feathes user card data

const getCart = async(req,res)=>{


    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({
            success:true,
            cartData
        })
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
    
}

export {addToCart,removeFromCart,getCart}


