// import React from 'react'
import { assets } from '../../Components/assets/assets'
import './Add.css'
import { useState } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'
const Add = () => {

    const url = 'http://localhost:4000'

    const [image,setImage] = useState(false)

    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"salad"


    })

    const changeHandler =(event)=>{
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
        console.log(data)
    }

    const onSubmitHandler =async (event)=>{

        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)


        const responce = await axios.post(`${url}/api/food/add`,formData)

        if(responce.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"salad"

            })
            setImage(false)
            console.log('your data has been saved on database')
            toast.success('your food added on ')

        }
        else{
            console.log(responce.status())
            toast.warn(responce.status())

            
        }
        
        // console.log(responce.status())



        


    }

    


  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt='' />
                </label>
                <input type='file' id='image' hidden required onChange={(e)=>{setImage(e.target.files[0])}}/>

            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input  type='text' name='name' placeholder='type here' onChange={changeHandler} value={data.name}></input>

            </div>
            <div className="add-product-description flex-col">
                <p>
                    Product Description
                </p>
                <textarea name='description' rows='10' placeholder='write content here' onChange={changeHandler} value={data.description}></textarea>
            </div>
            <div className="add-category-price flex-col">
                <div className="add-category">
                    <p>Product Category</p>
                    <select name='category' onChange={changeHandler}> 
                        <option value='salad'>Salad</option>
                        <option value='Rolls'>Rolls</option>
                        <option value='Deserts'>Deserts</option>
                        <option value='Sandwich'>Sandwich</option>
                        <option value='Cake'>Cake</option>
                        <option value='Pure Veg'>Pasta</option>
                        <option value='Pasta'>Pure Veg</option>
                        <option value='Noodles'>Noodles</option>

                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input type="Number" name='price' placeholder='$20' onChange={changeHandler} />

                </div>
                <button type='submit' className='add-btn'>Add</button>

            </div>

            </form>


            
    
        
      
    </div>
  )
}

export default Add
