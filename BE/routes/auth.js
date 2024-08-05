import { Router } from "express";
import {  getAllUser, login, register } from "../controllers/auth.js";
import { showProfile } from "../controllers/user.js";
import { loginValid, registerValue } from './../validations/user.js';
import { validBodyRequest } from "../middlewares/valiBodyReques.js";



const userRouter = Router();
userRouter.post("/register",validBodyRequest(registerValue), register);
userRouter.post("/login",validBodyRequest(loginValid), login);
userRouter.get("/me", showProfile);
userRouter.get("/", getAllUser);

export default userRouter;
