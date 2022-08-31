import { Router } from "express";
import {
  create,
  list,
  read,
  remove,
  update,
} from "../../app/controllers/productStorePrice";

const routerProductStore = Router();

routerProductStore.post("/productstores", create);
routerProductStore.get("/productstores", list);
routerProductStore.get("/productstores/:id", read);
routerProductStore.put("/productstores/:id", update);
routerProductStore.delete("/productstores/:id", remove);

export default routerProductStore;
