import mongoose, { Schema } from "mongoose";

const store = new Schema(
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
      latitude: Float32Array,
      longitude: Float32Array,
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

export default mongoose.model("Store", store);
