import { Router } from "express";
import apiRouter from "./api";
import authRouter from "./auth";

const router = Router();

router.use("/auth", authRouter);
router.use("/api", apiRouter);

export default routerProduct;
