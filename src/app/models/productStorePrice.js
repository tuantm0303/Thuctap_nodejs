import mongoose, { Schema } from "mongoose";

const productStorePrice = new Schema(
  {
    sku: {
      type: String,
    },
    store: {
      type: String,
    },
    price: {
      type: Object,
      raw: {
        type: Number,
      },
      discount: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProductStorePrice", productStorePrice);
