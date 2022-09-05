import mongoose from "mongoose";
import { configMongo } from "../configs";

const runLocalhost = configMongo.localhost;

export const connectionsMongo = mongoose
  .connect(
    `${runLocalhost.uri}:${runLocalhost.port}/${runLocalhost.databaseName}`
  )
  .then(() => console.log("Connect database success!"))
  .catch((error) => console.log(error));

export default connectionsMongo;
