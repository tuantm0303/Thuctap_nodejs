import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
});
