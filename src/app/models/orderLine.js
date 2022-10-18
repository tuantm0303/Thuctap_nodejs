import mongoose, { Schema, ObjectId } from "mongoose";

const orderLineSchema = new Schema(
  {
    orderId: {
      type: mongoose.Types.ObjectId,
      ref: "Orders",
    },
    owner: {
      type: Number,
      required: true,
    },
    product: {
      type: ObjectId,
      ref: "Products",
    },
    sale: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    bixu: {
      type: Number,
      default: 0,
    },
    price: {
      type: Object,
      required: true,
      raw: { type: Number },
      discount: { type: Number },
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("OrderLine", orderLineSchema);
