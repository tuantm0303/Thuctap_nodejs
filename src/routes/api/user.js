import { Router } from "express";
import { controller } from "../../app";

const routerUser = Router();

routerUser.post("/signup", controller.userController.signup);
routerUser.get("/signin", controller.userController.signin);
routerUser.delete("/signout/:id", controller.userController.signout);

export default routerUser;
