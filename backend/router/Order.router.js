import express from 'express'
import authMiddleware from '../middlewares/authentication.js'
import  {placeOrder,getProduct, verifyOrder, userOrders}  from '../controllers/Order.controller.js';

const orderRouter = express.Router();

orderRouter.route('/place').post(authMiddleware,placeOrder)
orderRouter.route('/getorder').get(getProduct)
orderRouter.route('/verify').post(verifyOrder)
orderRouter.route('/userorders').post(authMiddleware,userOrders)

export default orderRouter