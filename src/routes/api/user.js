import passport from "passport";
import { Router } from "express";
import { controller } from "../../app";

const routerUser = Router();

routerUser.post("/signup", controller.userController.signup);
routerUser.post("/signin", controller.userController.signin);
routerUser.delete("/signout/:id", controller.userController.signout);

// Passport authenticate jwt
routerUser.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  controller.userController.authorization
);

export default routerUser;
