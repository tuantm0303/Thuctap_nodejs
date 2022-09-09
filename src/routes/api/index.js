import { Router } from "express";
import routerProduct from "./product";
import routerStore from "./store";

const router = Router();

router.use("/products", routerProduct);
router.use("/stores", routerStore);

export default router;
