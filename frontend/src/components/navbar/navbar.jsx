import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import './navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/Context";

// const {getTotalCartAmount} = useContext(StoreContext)

function Navbar({setShowlogin}){
    const [menu ,setMenu] = useState('home')
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
     const navigate = useNavigate()

    const logout = ()=>{
        localStorage.removeItem("usertoken")
        setToken("")
        navigate('/')

        

    }


    return(
        <div className="navbar">
            <Link to='/'><img src={assets.logo} className="logo" alt="logo"></img></Link>
            <ul className="navbar-menu">
                <Link to = '/' onClick={()=> setMenu('home')}className={menu==="home"?"active":""}>Home</Link>
                <a href='#food-item'onClick={()=> setMenu('menu')}className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-download'onClick={()=> setMenu('mobile-app')}className={menu==="mobile-app"?"active":""}>Mobile App</a>
                <a href='#footer'onClick={()=> setMenu('contact-us')}className={menu==="contact-us"?"active":""}>Contact Us</a>

            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon}></img>
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon}></img></Link>
                    
                    <div className='dot'></div>

                    
                    
                </div>
                {!token?
                <button className="navbar-button" onClick={()=>setShowlogin(true)}>Sign in</button>
                : <div className="navbar-profile">
                    <img src={assets.profile_icon} alt="profile-image"></img>
                    <ul className="nav-profile-dropdown">
                        <li><img src={assets.bag_icon} /><p>Order</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                {/* <button className="navbar-button">Logout</button> */}
                

                </div>
                }
                
                
            </div>

        </div>
    )
}

export default Navbar ;