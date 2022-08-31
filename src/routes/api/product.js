import { Router } from "express";
import {
  create,
  list,
  read,
  remove,
  update,
} from "../../app/controllers/product";

const routerProduct = Router();

routerProduct.post("/products", create);
routerProduct.get("/products", list);
routerProduct.get("/products/:id", read);
routerProduct.put("/products/:id", update);
routerProduct.delete("/products/:id", remove);

export default routerProduct;
