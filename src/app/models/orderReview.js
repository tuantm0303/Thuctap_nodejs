import mongoose, { Schema, ObjectId } from "mongoose";

const orderReviewSchema = new Schema(
  {
    orderId: {
      type: mongoose.ObjectId,
      ref: "Orders",
    },
    product: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    media: {
      type: [
        {
          type: { type: String },
          url: { type: String },
        },
      ],
      required: true,
    },
    owner: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("OrderReview", orderReviewSchema);
