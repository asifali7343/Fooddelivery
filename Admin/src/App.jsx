// import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import Add from './Pages/Add/Add.jsx'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import List from './Pages/List/List.jsx'
import Order from './Pages/Orders/Order.jsx'
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <hr/>
      {/* <h1>ECOMMERCE SITES IS COMING SOON</h1> */}
      <div className="app-content">
        <Sidebar />
        <Routes>

          <Route path='/add' element={<Add/>} />
          <Route path='/list' element={<List/>} />
          {/* <Route path='/order' element={<Order />} />
           */}
           <Route path='/orders' element={<Order />} />

        </Routes>
      </div>
      
    </div>
  )
}

export default App
