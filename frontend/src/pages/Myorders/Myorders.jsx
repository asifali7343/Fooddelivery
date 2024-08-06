// import React from 'react'
import axios from 'axios'
import { useContext,useEffect,useState } from 'react'
import { StoreContext } from '../../context/Context'
import './Myorders.css'


function Myorders() {

    const { token } = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchData = async () => {
        const responce = await axios.post('http://localhost:4000/api/order/userorders', {}, { headers: { token } })
        if (responce.data.success) {
            setData(responce.data.data)

            console.log(data)


        }
    }

    useEffect(() => {
        fetchData()
        // console.log(data)
    }, [])

    return (
        <div className='main-container'>
            <div className="heading">
                <h1>your orders</h1>

            </div>
            <div className="titles">
                <ul>
                    <li>Number</li>
                    <li>Image</li>
                    <li>Item-Name</li>
                    <li>Quantity</li>
                    <li>Amount</li>
                    <li>Status</li>
                </ul>
            </div>
            <div className="orders-container">
                {data.map((item, index) => {
                    return (
                        <div className="orders" key={index}>

                            <ul>
                                <li className='serial-number'>{index + 1}</li>
                                <div className="list-item">
                                    {item.items.map((foodItem, index) => {
                                        return (

                                            <div key={index} className='list'>
                                                <li><img src={`http://localhost:4000/images/${foodItem.image}`} /></li>
                                                <li className='item-name'>{foodItem.name}</li>
                                                <li className='quantity'>{foodItem.quantity}</li>
                                            </div>
                                        )
                                    })}
                                </div>
                                <li className='amount'>{item.amount}$</li>

                                <li className='status'>{item.status}</li>

                            </ul>


                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Myorders
