import express from "express";
import cors from "cors";
import morgan from "morgan";

import { connectionsMongo } from "./connections";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use(routes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server running port", PORT);
});
