import { Router } from "express";
import { controller } from "../../app";

const routerOrderStatus = Router();

routerOrderStatus.post("/", controller.orderStatusController.create);
routerOrderStatus.get("/", controller.orderStatusController.list);
routerOrderStatus.get("/:id", controller.orderStatusController.read);
routerOrderStatus.put("/:id", controller.orderStatusController.update);

export default routerOrderStatus;
