
import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/Context';
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  console.log(getTotalCartAmount)
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items-title'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
           return (
            <>
            <div className='cart-items-item' key={item._id}>
              <img src={`${url}/images/${item.image}`} alt='' />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>${cartItems[item._id]}</p>
              <p>{item.price * cartItems[item._id]}</p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
               
               {/* <p onClick={()=>removeFromCart(item._id)} ></p> */}

            </div>
            <hr />
            </>
          );
        }
        return null; // Return null if the condition is not met
      })}
      <div className='cart-bottom'>
        <div className='cart-total'>
            <h2>Cart Totals</h2>
        
          <div>

            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>

            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>



          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <p>if you have a promo code ,Enter it here</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='promo-code' />
            <button>Submit</button>
          </div>

        </div>

      </div>


    </div>

  );
};

export default Cart;
