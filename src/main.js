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

// import bcrypt from "bcrypt";
// // or
// // const bcrypt = require('bcrypt')

// const password = "oe3im3io2r3o2";
// const rounds = 10;

// bcrypt.hash(password, rounds, (err, hash) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(hash);
// });
