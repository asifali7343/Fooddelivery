import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      
      <p>For Better Experience Download <br></br> Tomato App</p>
      <div className='app-download-platforms'>
        <a href='https://play.google.com' target='_blank'><img src={assets.play_store} alt=''></img></a>
        <a href='https://www.apple.com/' target='_blank'><img src={assets.app_store} alt=''></img></a>
      </div>
    </div>
  )
}

export default AppDownload
