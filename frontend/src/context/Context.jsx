import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from 'axios'
export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState({});
    const [token,setToken] = useState("")
    const [food_list,setFoodList] = useState([])
    console.log(cartItems)


    
    const addToCart = async (itemId)=>{

        if(!cartItems[itemId]){

            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
        }
        if(token){
            await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
        }
    }

    const removeFromCart = async (itemId) =>{

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
        if(token){
            await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}})
        }
    }

    const getTotalCartAmount = () => {

        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                food_list.find((product) => {
                     if(product._id === item){

                        return totalAmount += product.price * cartItems[item];


                    }
                });
            }
        }
        return totalAmount;
    }

    // console.log(getTotalCartAmount())
    const url = 'http://localhost:4000'
    

    useEffect(()=>{
        console.log("cartItems : "  + cartItems );
    },[cartItems])

    

    const fetchFoodList = async()=>{

        const responce = await axios.get(`${url}/api/food/allfoods`)

        if(responce.data.success){
            setFoodList(responce.data.data)
        }
        else{
            console.log('food list could not fetched')
        }
    }


    const loadCartData = async(token)=>{
        const responce = await axios.post(`${url}/api/cart/get`,{},{headers:{token}});
        setCartItems(responce.data.cartData);
    }

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("usertoken")){
                setToken(localStorage.getItem("usertoken"))
                await loadCartData(localStorage.getItem("usertoken"))
            }

        }

        loadData()
        

        
    },[])

    const contextvalue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    

    return(


        <StoreContext.Provider value={contextvalue}>

            {props.children}

        </StoreContext.Provider>
    )
}
export default StoreContextProvider;