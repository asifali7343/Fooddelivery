import express from 'express'
import { addToCart,removeFromCart,getCart } from '../controllers/cart.controller.js'
import authMiddleware from '../middlewares/authentication.js'

const cartRouter = express.Router()

cartRouter.route("/add").post(authMiddleware,addToCart)
cartRouter.route("/remove").post(authMiddleware,removeFromCart)
cartRouter.route("/get").post(authMiddleware,getCart)

export default cartRouter

