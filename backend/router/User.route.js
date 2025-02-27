import express from 'express'
import {loginUser,registerUser} from '../controllers/User.controller.js'

const userRouter = express.Router();

userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)


export default userRouter;
