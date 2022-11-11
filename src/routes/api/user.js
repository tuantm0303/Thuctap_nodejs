import { Router } from "express";
import { controller } from "../../app";

const routerUser = Router();

routerUser.post("/signup", controller.userController.signup);
routerUser.post("/signin", controller.userController.signin);
routerUser.patch("/editProfile/:username", controller.userController.update);
routerUser.delete("/signout/:id", controller.userController.signout);

export default routerUser;
