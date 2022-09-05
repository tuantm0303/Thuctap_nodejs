import { Router } from "express";
import { StoreRoute } from "../../app/controllers";

const routerStore = Router();

routerStore.post("/", StoreRoute.create);
routerStore.get("/", StoreRoute.list);
routerStore.get("/:id", StoreRoute.read);
routerStore.put("/:id", StoreRoute.update);
routerStore.delete("/:id", StoreRoute.remove);

export default routerStore;
