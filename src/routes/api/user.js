import { Router } from "express";
import { controller } from "../../app";

const routerUser = Router();

routerUser.post("/signup", controller.userController.signup);

export default routerUser;
