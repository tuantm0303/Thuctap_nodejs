import { Router } from "express";
import { ProductRoute } from "../../app/controllers";

const routerProduct = Router();

routerProduct.post("/", ProductRoute.create);
routerProduct.get("/", ProductRoute.list);
routerProduct.get("/:id", ProductRoute.read);
routerProduct.put("/:id", ProductRoute.update);
routerProduct.delete("/:id", ProductRoute.remove);
routerProduct.get("/search", ProductRoute.search);

export default routerProduct;
