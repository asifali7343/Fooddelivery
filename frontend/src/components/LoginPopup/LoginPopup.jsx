import  { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
// import StoreContextProvider from '../../context/Context'


import { StoreContext } from '../../context/Context.jsx'
const LoginPopup = ({setShowlogin}) => {

    const URL = 'http://localhost:4000'

    const [currState,setCurrState] = useState('Login')
    const {token,setToken} = useContext(StoreContext)
    

    const [data,setData] = useState({
        name:"",
        email:"",
        password:""



    })
    const changeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value
        // const email = event.target.email
        // const password = event.target.password

        setData(data=>({...data,[name]:value}))
        console.log(data)
        
    }


    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        const responce = await axios.post(`${URL}/api/user/${currState==="Login"?"login":"register"}`,data);
        if(responce.data.success){
            setToken(responce.data.token);
            localStorage.setItem("usertoken",responce.data.token)
            setShowlogin(false)       
                if(currState==="Login"){
                    console.log('your have been logining')
    
                    
    
                
                    
                }else{
                    console.log('your data has been registered')
                }
            

        }
    }
        

        


    

  return (
    <div  className='login-popup'>
        <form className='login-popup-container' onSubmit={onSubmitHandler}>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowlogin(false)} src={assets.cross_icon}></img>
            </div>
            <div className='login-popup-inputs'>
                {currState==='Login'?<></>:
                <input type='text' placeholder='your name' required name="name"  onChange={changeHandler} value={data.name}/>}
                <input type='email' placeholder='your email' required name="email" onChange={changeHandler} value={data.email}/>
                <input type='password' placeholder='password' required name="password" onChange={changeHandler} value={data.password} />

            </div>
            <button type='submit'>{currState==='Sign Up'? 'Create account':'Login'} </button>
            <div className='login-popup-condition'>
                <input type='checkbox' required></input>
                <p>By Continuing , i agree to the terms of use & privecy policy.</p>
            </div>
            {currState==='Login'?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}

        

        </form>
        {/* <h2>Sign Up</h2> */}
      
    </div>
  )

}
export default LoginPopup
