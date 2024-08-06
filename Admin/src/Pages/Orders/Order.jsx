// import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import {toast} from 'react-toastify'
import './Order.css'
const Order = () => {
  const [order,setOrder] = useState([]) 
  const fetchOrder = async()=>{
    const responce = await axios.get('http://localhost:4000/api/order/getorder');

    if(responce.data.success){
      setOrder(responce.data.order)
      // toast.success('data fetched')
      // console.log(order)
    }
  }
  useEffect(()=>{
    fetchOrder();
    console.log(order)
  },[])


  return (
    <div>
      <h1>This is Your Orders Please</h1>
      <button onClick={fetchOrder}>FETCH DATA</button>
      <div className='main-container' >
        {order.map((item,index)=>{
          return(
          <div key={index} className='container'>
            <div className='left-side-container' >
            <p>ID: {item._id} </p>
            <p>Amount: {item.amount} $</p>
            <p>Status: {item.status} </p>
            <p>Date: {item.date} </p>
            <p>payment: {item.payment} </p>





            
              {item.items.map((food,index)=>{
                return(
                <div key={index} className='food-item'>
                  <p>Food id:{food._id}</p>
                  <p><img src={`http://localhost:4000/images/${food.image}`} alt='image' /></p>

                  <p>Quantity:{food.quantity}</p>
                  {/* <p>Food Name:{food.name}</p> */}

                </div>)



              })}
             </div>

            <div className='right-side-container'>
            

              
                
                   <h4>Full Address</h4>
                  <p>Name: {`${item.address.firstName}${item.address.lastName} `} </p>
                  <p>email: {item.address.email}</p>
                  <p>stret:{item.address.street}</p>
                  <p>city:{item.address.city}</p>
                  <p>state:{item.address.state}</p>
                  <p>country:{item.address.country}</p>
                  <p>phone:{item.address.firstName}</p>

            </div>



          </div>
          )
        })}
      </div>
      
      
    </div>
  )
}

export default Order
