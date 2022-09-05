import { Router } from "express";
import { ProductStoreRoute } from "../../app/controllers";

const routerProductStore = Router();

routerProductStore.post("/", ProductStoreRoute.create);
routerProductStore.get("/", ProductStoreRoute.list);
routerProductStore.get("/:id", ProductStoreRoute.read);
routerProductStore.put("/:id", ProductStoreRoute.update);
routerProductStore.delete("/:id", ProductStoreRoute.remove);

export default routerProductStore;
