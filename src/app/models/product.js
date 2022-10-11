import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    _id: {
      type: Number,
    },
    brand: {
      type: Number,
      required: true,
    },
    category: {
      type: Number,
      required: true,
    },
    division: {
      type: Number,
      required: true,
    },
    function: {
      type: Number,
      required: true,
    },
    group: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    parent: {
      type: Number,
      required: true,
    },
    parent_count: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    source: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    tags: {
      type: Array,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
    range_review: {
      type: String,
      required: true,
    },
    bixu: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
productSchema.index({ "$**": "text" });

export default mongoose.model("Product", productSchema);
