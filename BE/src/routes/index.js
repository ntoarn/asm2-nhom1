
import { Router } from "express";
import productRouter from "./product.js";
import categoryRouter from "./category.js";
import authRouter from "./auth.js";

const router = Router();
router.use('/products', productRouter)
router.use('/categories', categoryRouter)
router.use('/', authRouter)

export default router