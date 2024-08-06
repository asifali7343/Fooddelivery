// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/Home/home"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Cart from "./pages/Cart/Cart"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import Verify from "./pages/Verify/Verify.jsx"
import Myorders from "./pages/Myorders/Myorders.jsx"

// Routes


const App = () => {

  const [showlogin,setShowlogin] = useState(false)
  return (
    <>
    {showlogin ? <LoginPopup setShowlogin={setShowlogin} />:<></>}
    <div className="app">
    <Navbar setShowlogin={setShowlogin} />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/order" element={<PlaceOrder />}></Route>
    <Route path="/verify" element={<Verify/>}/>
    <Route path="/myorders" element={<Myorders/>}/>

    


    </Routes> 

     </div> 
     <Footer />
     </>
  )
}

export default App
