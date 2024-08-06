import { StoreContext } from "../../context/Context";
import Fooditem from "../Fooditem/Fooditem";
import "./Fooddisplay.css";
 

import { useContext } from 'react'

const Fooddisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);




  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near you</h2>
      <div className="food-list-item">


        {food_list.map((item,index)=>{

          if(category === 'All' || category === item.category){

          return(<Fooditem key={index} id={item._id} name={item.name} description={item.description} price = {item.price} image = {item.image} />
          )
        }})


          }
          
          

      </div>

      
    </div>
  )
}

export default Fooddisplay;
