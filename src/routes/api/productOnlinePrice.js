import { Router } from "express";
import {
  create,
  list,
  read,
  remove,
  update,
} from "../../app/controllers/productOnlinePrice";

const routerProductOnline = Router();

routerProductOnline.post("/productonlines", create);
routerProductOnline.get("/productonlines", list);
routerProductOnline.get("/productonlines/:id", read);
routerProductOnline.put("/productonlines/:id", update);
routerProductOnline.delete("/productonlines/:id", remove);

export default routerProductOnline;
