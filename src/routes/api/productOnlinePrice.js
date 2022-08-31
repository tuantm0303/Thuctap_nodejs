import { Router } from "express";
import {
  create,
  list,
  read,
  remove,
  update,
} from "../../app/controllers/productOnlinePrice";

const routerProductOnline = Router();

routerProductOnline.post("/productsonline", create);
routerProductOnline.get("/productsonline", list);
routerProductOnline.get("/productsonline/:id", read);
routerProductOnline.put("/productsonline/:id", update);
routerProductOnline.delete("/productsonline/:id", remove);

export default routerProductOnline;
