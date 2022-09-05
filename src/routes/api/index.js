import { Router } from "express";
import routerProduct from "./product";
import routerProductOnline from "./productOnlinePrice";
import routerProductStore from "./productStorePrice";
import routerStore from "./store";

const router = Router();

router.use("/products", routerProduct);
router.use("/productonlines", routerProductOnline);
router.use("/productstores", routerProductStore);
router.use("/stores", routerStore);

export default router;
