import express from "express";
import cors from "cors";
import morgan from "morgan";
import expressSession from "express-session";
import passport from "passport";
import routes from "./routes";
import configs from "./configs";
import { connectionsMongo } from "./connections";

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// Passport setting
app.use(expressSession({ secret: configs.secrets.JWT_SECRENT }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server running port", PORT);
});
