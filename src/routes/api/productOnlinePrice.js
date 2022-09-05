import { Router } from "express";
import { ProductOnlineRoute } from "../../app/controllers";

const routerProductOnline = Router();

routerProductOnline.post("/", ProductOnlineRoute.create);
routerProductOnline.get("/", ProductOnlineRoute.list);
routerProductOnline.get("/:id", ProductOnlineRoute.read);
routerProductOnline.put("/:id", ProductOnlineRoute.update);
routerProductOnline.delete("/:id", ProductOnlineRoute.remove);

export default routerProductOnline;
