import { Router } from "express";
import { createOrder, getOrders } from "../controllers/order.js";
import { forgotPassword } from "../controllers/forgotPassword.js";



const forgotpasswordRouter = Router();
forgotpasswordRouter.post("/forgot-password" , forgotPassword )
export default forgotpasswordRouter;