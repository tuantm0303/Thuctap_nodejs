import { Router } from "express";
import {
  create,
  list,
  read,
  remove,
  update,
} from "../../app/controllers/store";

const routerStore = Router();

routerStore.post("/stores", create);
routerStore.get("/stores", list);
routerStore.get("/stores/:id", read);
routerStore.put("/stores/:id", update);
routerStore.delete("/stores/:id", remove);

export default routerStore;
