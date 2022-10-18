import { Router } from "express";
import { controller } from "../../app";

const routerOrderLine = Router();

routerOrderLine.post("/", controller.orderLineController.create);
routerOrderLine.get("/", controller.orderLineController.list);
routerOrderLine.get("/:id", controller.orderLineController.read);
routerOrderLine.put("/:id", controller.orderLineController.update);

export default routerOrderLine;
