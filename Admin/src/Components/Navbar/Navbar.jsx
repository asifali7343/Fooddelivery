// import React from 'react'
import './Navbar.css'
import {assets}  from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='navbar'>

        <img src={assets.logo} className='logo' alt='logo' />
        <img className='profile' src={assets.profile_image} alt='profile-image' />

      
    </div>
  )
}

export default Navbar
