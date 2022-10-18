import { Router } from "express";
import routerProduct from "./product";
import routerStore from "./store";
import routerOrder from "./order";
import routerOrderLine from "./orderLine";
import routerOrderReview from "./orderReview";
import routerOrderStatus from "./orderStatus";
import routerUser from "./user";

const router = Router();

router.use("/products", routerProduct);
router.use("/stores", routerStore);
router.use("/orders", routerOrder);
router.use("/orderLines", routerOrderLine);
router.use("/orderReviews", routerOrderReview);
router.use("/orderStatuses", routerOrderStatus);
router.use("/", routerUser);

export default router;
