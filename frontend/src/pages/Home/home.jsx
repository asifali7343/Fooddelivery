import { useState } from 'react'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import Heeder from '../../components/Header/Heeder'
import './home.css'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
// import React from 'react'
// Heeder


const Home = () => {
    const [category,setCatogory] = useState('All')
  return (
    <div>
        <Heeder />

        <Exploremenu category = {category}  setCatogory = {setCatogory}/>

        <Fooddisplay category={category} />
        <AppDownload />
      
    </div>
  )
}

export default Home
