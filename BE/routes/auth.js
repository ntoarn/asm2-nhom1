import { Router } from "express";
import {  getAllUser, login, register } from "../controllers/auth.js";
import { showProfile } from "../controllers/user.js";



const userRouter = Router();
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/me", showProfile);
userRouter.get("/", getAllUser);

export default userRouter;
