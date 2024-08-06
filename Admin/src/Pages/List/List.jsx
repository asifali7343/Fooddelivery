// import React from 'react'
import { useState,useEffect} from 'react'
import './List.css'
import axios from 'axios'
import URL from '../../Components/Constants'
import {toast} from 'react-toastify'
// import { assets } from '../../Components/assets/assets'
const List = () => {
    // const url = 'http://localhost:4000/api/food'
    const [list,setList] = useState([])

    const fetchList = async()=>{
        const responce = await axios.get(`${URL}/allfoods`)
        if(responce.data.success){
            console.log(responce.data)
            setList(responce.data.data)

        }
        else{
            toast.error('could not fetch data')
        }
    }
    // const url = 'http://localhost:4000'

    useEffect(()=>{
        fetchList()
        console.log(list)
    },1000)

    const removeItem = async(itemId)=>{
        console.log(itemId)
        // event.preventDefault();

        const responce  = await axios.post(`http://localhost:4000/api/food/remove`,{id:itemId});
        if(responce.data.success)
            {
            console.log(`this item id is removed : ${itemId}`)
            fetchList()
        }
    }



    

  return (
    <div className='list-add flex-col'>
        <p>All Food List</p>
        <div className="list-table">
            <div className="list-table-format title">
                <p>Image</p>
                <p>Name</p>
                <p>Category</p>
                <p>description</p>
                <p>Price</p>
                <p>Action</p>

                

            </div>

            {list.map((item,index)=>{

                return(
                    <>
                    <div key={index} className='list-table-format'>
                        <img src={`http://localhost:4000/images/${item.image}`} alt='image' />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>{item.description}</p>
                        <p>{item.price}$</p>
                        <p onClick={()=>{removeItem(item._id)}}>X</p>

                        

                        
                        </div>
                        <hr />
                        </>
                )
                

            })}
        </div>
      
    </div>
  )
}

export default List
