import { Router } from "express";
import { startSession } from "mongoose";
import { ProductRoute } from "../../app/controllers";
import { Product, ProductOnline, ProductStore } from "../../app/models";

const routerProduct = Router();

routerProduct.post("/", ProductRoute.create);
routerProduct.get("/", ProductRoute.list);
routerProduct.get("/:id", ProductRoute.read);
routerProduct.put("/:id", ProductRoute.update);
routerProduct.delete("/:id", ProductRoute.remove);
routerProduct.get("/search", ProductRoute.search);

export default routerProduct;
