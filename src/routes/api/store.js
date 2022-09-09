import { Router } from "express";
import { controller } from "../../app";

const routerStore = Router();

routerStore.post("/", controller.storeController.create);
routerStore.get("/", controller.storeController.list);
routerStore.get("/:id", controller.storeController.read);
routerStore.put("/:id", controller.storeController.update);
routerStore.delete("/:id", controller.storeController.remove);

export default routerStore;
