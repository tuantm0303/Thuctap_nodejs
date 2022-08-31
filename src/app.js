import express from "express";
import cors from "cors";
import morgan from "morgan";

import connections from "./connections";
import routerProduct from "./routes/api/product";
import routerStore from "./routes/api/store";
import routerProductOnline from "./routes/api/productOnlinePrice";
import routerProductStore from "./routes/api/productStorePrice";

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", routerProduct);
app.use("/api", routerStore);
app.use("/api", routerProductOnline);
app.use("/api", routerProductStore);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server running port", PORT);
});
