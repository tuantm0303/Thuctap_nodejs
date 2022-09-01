import { Router } from "express";
import { productController } from "../../app/controllers";

const routerProduct = Router();

routerProduct.post("/", productController.create);
routerProduct.get("/", productController.list);
routerProduct.get("/:id", productController.read);
routerProduct.put("/:id", productController.update);
routerProduct.delete("/:id", productController.remove);
routerProduct.get("/search", productController.search);

export default routerProduct;
