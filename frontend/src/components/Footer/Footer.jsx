import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (

    <div className='footer' id='footer'>
        <div className='footer-content'>

            <div className='footer-content-left'>
                <img src={assets.logo} alt=''></img>
                
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum facere, in, nobis perferendis dolorum tempore modi distinctio voluptate aspernatur quaerat doloribus ea placeat cumque et expedita! Aliquam molestias ut dolorum.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon}></img>
                    <img src={assets.twitter_icon}></img>
                    <img src={assets.linkedin_icon}></img>


                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 620787878</li>
                    <li>conatct@gmail.com</li>
                </ul>
            </div>
            

        </div>
        <div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 &copy  mato.com -All right Reserved.</p>
        </div>



      
    </div>
  )
}

export default Footer
