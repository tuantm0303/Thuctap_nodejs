import { Router } from "express";
import { controller } from "../../app";
import { jwtAuth } from "../../middlewares";

const routerStore = Router();

routerStore.use("/", jwtAuth);

routerStore.post("/", controller.storeController.create);
routerStore.get("/", controller.storeController.list);
routerStore.get("/:id", controller.storeController.read);
routerStore.put("/:id", controller.storeController.update);
routerStore.delete("/:id", controller.storeController.remove);

export default routerStore;
