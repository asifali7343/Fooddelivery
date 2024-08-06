import  { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
// import { useState } from 'react'
import { StoreContext } from '../../context/Context'


const Fooditem = ({id,name,price,description,image}) => {

    // const [cartItems,addToCart,removeFromCart]=useContext(StoreContext)

    // const [itemCount,setItemCount] = useState(0)
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)
    console.log(cartItems)


    
    // console.log(cartItems)


  return (
    <div className='food-item' id='food-item'>

        <div className='food-item-container'>
            <img className='food-item-image' src={`${url}/images/${image}`} alt=''></img>

            {!cartItems[id]?<img src={assets.add_icon_white} alt='icon' className='add' onClick={()=>{addToCart(id)}}/>
            :<div className='food-item-counter'>
                <img src={assets.remove_icon_red} alt='' onClick={()=>{removeFromCart(id)}}></img>
                <p>{cartItems[id]}</p>
                <img onClick={()=>{addToCart(id)}} src={assets.add_icon_green}></img>
            </div>}
            

        </div>
        
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts}></img>


            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>


        </div>
 
    </div>
  )

}

    

export default Fooditem

// import { useContext } from 'react'
// import './Fooditem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/Context'

// const Fooditem = ({ id, name, price, description, image }) => {
//     const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

//     return (
//         <div className='food-item' id='food-item'>
//             <div className='food-item-container'>
//                 <img className='food-item-image' src={image} alt='' />
//                 {!cartItems[id] ?
//                     <img src={assets.add_icon_white} alt='icon' className='add' onClick={() => addToCart(id)} />
//                     :
//                     <div className='food-item-counter'>
//                         <img src={assets.remove_icon_red} alt='' onClick={() => removeFromCart(id)} />
//                         <p>{cartItems[id]}</p>
//                         <img src={assets.add_icon_green} alt='' onClick={() => addToCart(id)} />
//                     </div>
//                 }
//             </div>
//             <div className='food-item-info'>
//                 <div className='food-item-name-rating'>
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt='' />
//                 </div>
//                 <p className='food-item-desc'>{description}</p>
//                 <p className='food-item-price'>${price}</p>
//             </div>
//         </div>
//     )
// }

// export default Fooditem

