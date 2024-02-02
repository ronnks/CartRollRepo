import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./users.routes";
import ordersRoutes from "./orders.routes";
import productRoutes from "./products.routes";

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/orders", ordersRoutes);
router.use("/products", productRoutes);

export default router;
