import { Router } from "express";
import { add, edit, list, read, remove } from "../../app/controllers/product";

const routerProduct = Router();

routerProduct.post("/products", add);
routerProduct.get("/products", list);
routerProduct.get("/products/:id", read);
routerProduct.put("/products/:id", edit);
routerProduct.delete("/products/:id", remove);

export default routerProduct;
