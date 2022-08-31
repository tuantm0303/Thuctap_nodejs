import mongoose, { Schema } from "mongoose";

const productStoreSchema = new Schema(
  {
    sku: {
      type: String,
    },
    store: {
      type: String,
    },
    price: {
      type: Object,
      raw: { type: Number },
      discount: { type: Number },
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProductStore", productStoreSchema);
