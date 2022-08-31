import mongoose, { Schema } from "mongoose";

const productOnlinePrice = new Schema(
  {
    sku: {
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

export default mongoose.model("ProductOnlinePrice", productOnlinePrice);
