import { Router } from "express";
import { controller } from "../../app";

const routerOrder = Router();

routerOrder.post("/", controller.orderController.create);
routerOrder.get("/", controller.orderController.list);
routerOrder.get("/:id", controller.orderController.read);
routerOrder.put("/:id", controller.orderController.update);

export default routerOrder;
