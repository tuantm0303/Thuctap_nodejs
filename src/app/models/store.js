import mongoose, { Schema } from "mongoose";

const storeSchema = new Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    code: {
      type: String,
    },
    location: {
      type: Object,
      latitude: { type: mongoose.Types.Decimal128 },
      longitude: { type: mongoose.Types.Decimal128 },
    },
    name: {
      type: String,
    },
    working: {
      type: Object,
      open: {
        type: Number,
      },
      close: {
        type: Number,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Store", storeSchema);
