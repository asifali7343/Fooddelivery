import { useContext,useEffect,useState } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../context/Context';
// import './myorder.css'
// import {useEffect} from 'react'

// import navigate from 'express'
import {useNavigate} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

import axios from 'axios';
// import { food_list } from '../../assets/assets';


const PlaceOrder = () => {

// const navigate = useNavigate();

const {getTotalCartAmount,token,cartItems,url,food_list} = useContext(StoreContext)
console.log(food_list)

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    country:"",
    phone:"",
    zipCode:""


  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value

    setData(data=>({...data,[name]:value}))
    console.log(data)

  }

  

  const placedorder = async(event)=>{
    // event.preventDefault();ss
    event.preventDefault();
    let orderItem = [];
    food_list.map((item)=>{
      // console.log("Asif")
      console.log("food list" + item)
      console.log("cartitems:"+cartItems)
      if(cartItems[item._id]>0){
        let itemIfo = item;
        itemIfo["quantity"] = cartItems[item._id];
        orderItem.push(itemIfo)
        // console.log(itemIfo)

      }

    })
    console.log(orderItem)
    let orderData = {
      address:data,
      items:orderItem,
      amount:getTotalCartAmount()+2

    }
    console.log(orderData);
  let responce = await axios.post(`${url}/api/order/place`,orderData,{headers:{token}});

    if(responce.data.success){
      const {session_url} = responce.data;
      window.location.replace(session_url);

    }else{
      alert('Error')
    }
    const navigate = useNavigate();

    useEffect(()=>{

      if(!token){
        navigate('/cart')



      }
      else if(getTotalCartAmount===0){
        navigate('/cart')
      }

      


    },[token])


    // console.log(cartItems)




  }
    
  



  return (
    <form className='place-order' onSubmit={placedorder}>

    <div className='place-order-left'>
      <p className="title">Delivery Information</p>
      <div className='multi-fields'>
        <input required  type='text' placeholder='First Name' name='firstName' value={data.firstName} onChange={onChangeHandler}></input>
        <input required  type='text' placeholder='Last Name' name='lastName' value={data.lastName} onChange={onChangeHandler}></input>

      </div>
      <div className='multi-fields'>
      <input required  type='text' placeholder='Email address' name='email' value={data.email} onChange={onChangeHandler}></input>
      <input required  type='text' placeholder='Steet' name='street' value={data.street} onChange={onChangeHandler}></input>
      </div>
      <div className='multi-fields'>
      <input required  type='text' placeholder='City' name='city' value={data.city} onChange={onChangeHandler}></input>
      <input required  type='text' placeholder='State' name='state' value={data.state} onChange={onChangeHandler}></input>
      </div>
      <div className='multi-fields'>
      <input required  type='text' placeholder='Zip Code' name='zipCode' value={data.zipCode} onChange={onChangeHandler}></input>
      <input required  type='text' placeholder='Country' name='country' value={data.country} onChange={onChangeHandler}></input>
      </div>
      <input required  type='text' placeholder='Phone' name='phone' value={data.phone} onChange={onChangeHandler}></input>
      


    </div>
    <div className='place-order-right'>
    <div className='cart-total'>
            <h2>Cart Totals</h2>
        
          <div>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>${2}</p>

            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>



          </div>
          <button type='submit'>PROCEED TO CHECKOUT</button>
        </div>

    </div>


    </form>

      
    
  )
}

export default PlaceOrder;
