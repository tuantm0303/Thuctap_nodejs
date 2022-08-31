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
    // location: {
    //   type: Object,
    //   latitude: { type: mongoose.Types.Decimal128 },
    //   longitude: { type: mongoose.Types.Decimal128 },
    // },
  },
  { timestamps: true }
);

export default mongoose.model("ProductOnline", productOnlineSchema);
