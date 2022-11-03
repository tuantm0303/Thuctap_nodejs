import express from "express";
import cors from "cors";
import morgan from "morgan";
import expressSession from "express-session";
import passport from "passport";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
import routes from "./routes";
import middlewares from "./middlewares";
import { connectionsMongo } from "./connections";

const app = express();
const swaggerJSDocs = YAML.load("./api.yaml");
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Passport setting
app.use(expressSession({ secret: middlewares.secrets.JWT_SECRENT }));
// Khởi tạo passport
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server running port", PORT);
});
