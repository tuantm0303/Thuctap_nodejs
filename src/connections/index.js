import mongoose from "mongoose";

const connections = mongoose
  .connect("mongodb://localhost:27017/BiBoMart")
  .then(() => console.log("Connect database success!"))
  .catch((error) => console.log(error));

export default connections;
