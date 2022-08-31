import express from "express";
import cors from "cors";
import morgan from "morgan";

import routerProduct from "./routes/api/product";
import connections from "./connections";

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api", routerProduct);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server running port", PORT);
});
