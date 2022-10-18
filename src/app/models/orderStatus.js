import mongoose, { Schema } from "mongoose";

const orderStatusSchema = new Schema(
  {
    order: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("OrderStatus", orderStatusSchema);
