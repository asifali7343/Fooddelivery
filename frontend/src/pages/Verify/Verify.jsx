// import '/Veriy.css'

import { useSearchParams } from "react-router-dom"

// import React from 'react'

const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")


  return (
    <div>
        <h1>Verification Comming soon</h1>
      
    </div>
  )
}

export default Verify

