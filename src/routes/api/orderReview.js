import { Router } from "express";
import { controller } from "../../app";

const routerOrderReview = Router();

routerOrderReview.post("/", controller.orderReviewController.create);
routerOrderReview.get("/", controller.orderReviewController.list);
routerOrderReview.get("/:id", controller.orderReviewController.read);
routerOrderReview.put("/:id", controller.orderReviewController.update);

export default routerOrderReview;
