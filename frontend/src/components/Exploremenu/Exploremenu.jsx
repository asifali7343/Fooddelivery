// import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'



const Exploremenu = ({category,setCatogory}) => {


  return (

    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quae reiciendis! Et facilis, voluptatem sit expedita placeat voluptatum dolorem sequi libero cum repudiandae consequatur, rerum pariatur. Deserunt quia exercitationem laboriosam.</p>
        <div className='explore-menu-list'>

            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCatogory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} className={category===item.menu_name?"active":""}></img>
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}

        </div>
        <hr></hr>
    </div>
  )
}

export default Exploremenu;
