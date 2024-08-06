import orderModel from "../models/Order.models.js";
// import userModel from '../models/user.models.js';

// import stripe from 'stripe'
import userModel from "../models/User.model.js";
import Stripe from "stripe";
import Razorpay from 'razorpay'

const instance = new Razorpay({

    key_id:'rzp_test_d5SzMdMQkrroln',
    key_secret:'IwZz4yjxomywsUdjMVBTRoZA'
})

// const stripe = new Stripe(process.env.STRIPEKEYID);



const placeOrder = async(req,res)=>{

    const frontendUrl = 'http://localhost:5173'

    try {
        const newOrder = new orderModel({
            userId : req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })

        // let option = {
        //     amoutn:0,
        //     description:"",
        //     customer:{
        //         name:"",
        //         email:"",
        //         phone:""
        //     }

        
        let amount = 0

        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item,index)=>{


            

            let calculatedAmount = amount + (item.price*item.quantity)*100;
            console.log('calculated:' + calculatedAmount)
            amount = calculatedAmount + amount
            // amount += calculatedAmount;
        })
        const name = `${newOrder.address['firstName']} ${newOrder.address['lastName']}`

        console.log(name)
        // const address =  newOrder.address
        // console.log('address: ' + address)

        const option = {
            name:name,
            amount:amount,
            description:'Order Bill',
            customer:{
                name:`${newOrder.address['firstName']} ${newOrder.address['lastName']}`,
                email:newOrder.address['email'],
                phone:newOrder.address['phone']

         }
            
        }


    console.log("options:"+ option)
    }
    catch(error){
        console.log(error)
    }

}



        //             price_data:{
        //             currency:"inr",
        //             product_data:{
        //             name:item.name },

        //             unit_amount:item.price*100*80

        //                 },

        //     quantity:item.quantity
        // }))

        // console.log(line_items)

        // line_items.push({
        //     price_data:{
        //         currency:"inr",
        //         produt_data:{
        //             name:"Delivery Charges"
        //         },

        //         unit_amount:2*100*80

        //     },
        //     quantity:1

//         // })
//         const session = await instance.orders.create({
//             line_items:{
//                 amount:500*100*2,
//                 currancy:"INR",
//                 receipt:'receipt#1'


//             },
//             mode:"payment",
//             success_url :`${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url :`${frontendUrl}/verify?false=true&orderId=${newOrder._id}`,


//         })
//         res.json({
//             success:true,session_url:session.url
//         })
        
        
//     } catch (error) {
//         console.log(error)
//         res.json({
//             success:false,
//             message:"Error"
//         })
        
//     }

// }



    
    

const getProduct = async(req,res)=>{
    try {
    const responce = await orderModel.find({});

    if(responce){

        res.json({
            success:true,
            order:responce


        })
        
    }

        
    } catch (error) {
        console.log(error)
        
    }

}

const userOrders = async(req,res)=>{
    
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        res.json({success:false,message:error})
        
    }

}

const verifyOrder = async(req,res)=>{
    const {orderId,success}= req.body;
    try{
        if(success=='true'){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"})
        }
    }
    catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})

    }




}
        

        


        
        




// }

export {placeOrder,getProduct,verifyOrder,userOrders}