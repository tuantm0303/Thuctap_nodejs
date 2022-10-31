import { Router } from "express";
import { controller } from "../../app";

const routerOrder = Router();

routerOrder.post("/", controller.orderController.create);
routerOrder.get("/", controller.orderController.list);
routerOrder.get("/:id", controller.orderController.read);
routerOrder.get("/review/:id", controller.orderController.readReview);
routerOrder.put("/:id", controller.orderController.update);
routerOrder.post("/addReview", controller.orderController.createReview);

export default routerOrder;
