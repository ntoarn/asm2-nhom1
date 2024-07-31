import { Router } from "express";
import categoryRouter from "./category.js";
import productRouter from "./product.js";

import cartRouter from "./cart.js";
import orderRouter from "./order.js";
import userRouter from "./auth.js";

const router = Router();

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/order", orderRouter);
router.use("/cart", cartRouter);
router.use("/users", userRouter);

export default router;
