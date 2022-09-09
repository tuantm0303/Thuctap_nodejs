import mongoose, { Schema } from "mongoose";

const productOnlineSchema = new Schema(
  {
    sku: {
      type: String,
    },
    price: {
      type: Object,
      latitude: { type: Number },
      longitude: { type: Number },
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProductOnline", productOnlineSchema);
