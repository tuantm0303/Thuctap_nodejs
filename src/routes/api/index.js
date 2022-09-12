import { Router } from "express";
import routerProduct from "./product";
import routerStore from "./store";
import routerUser from "./user";

const router = Router();

router.use("/products", routerProduct);
router.use("/stores", routerStore);
router.use("/", routerUser);

export default router;
