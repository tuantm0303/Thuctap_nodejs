import { Router } from "express";
import { controller } from "../../app";
import { jwtAuth } from "../../middlewares";

const routerProduct = Router();

routerProduct.use("/", jwtAuth);

routerProduct.post("/", controller.productController.create);
routerProduct.get("/", controller.productController.list);
routerProduct.get("/:id", controller.productController.read);
routerProduct.get("/sku/:sku", controller.productController.readSku);
routerProduct.put("/:id", controller.productController.update);
routerProduct.delete("/:id", controller.productController.remove);
routerProduct.get("/search", controller.productController.search);

export default routerProduct;
