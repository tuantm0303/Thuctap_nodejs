import mongoose from "mongoose";
import { mongo } from "../configs";

const configMongo = mongo[process.env];

console.log("Config mongo: ", configMongo);

const connections = mongoose
  .connect(`mongodb://localhost:27017/BiBoMart`)
  .then(() => console.log("Connect database success!"))
  .catch((error) => console.log(error));

export default connections;
