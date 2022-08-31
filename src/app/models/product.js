import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    brand: {
      type: Number,
    },
    parent: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    sku: {
      type: String,
    },
    status: {
      type: Number,
    },
    thumbnail: {
      type: String,
    },
    unit: {
      type: String,
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
