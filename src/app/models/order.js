import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    cart: {
      type: String,
      require: true,
    },
    owner: {
      type: Number,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    input: {
      type: Number,
      require: true,
    },
    payment: {
      type: Object,
      method: {
        type: Object,
        _id: { type: String },
        created: { type: Date },
        createdBy: { type: String },
        name: { type: String },
        status: { type: Boolean },
        type: { type: Number },
        updated: { type: Date },
        updatedBy: { type: String },
      },
    },
    shipping: {
      type: Object,
      address: { type: Object },
      type: { type: Number },
      item: { type: String },
      store: {
        type: Object,
        _id: { type: Number },
        address: { type: String },
        code: { type: String },
        district: {
          type: Object,
          _id: { type: Number },
          code: { type: String },
          macroregion: { type: Number },
          name: { type: String },
          province: { type: Number },
          region: { type: Number },
        },
        location: {
          type: Object,
          latitude: { type: Number },
          longitude: { type: Number },
        },
        macroregion: { type: Number },
        name: { type: String },
        province: {
          type: Object,
          _id: { type: Number },
          code: { type: String },
          macroregion: { type: Number },
          name: { type: String },
          region: { type: Number },
          type: { type: String },
        },
        region: { type: Number },
        ward: {
          type: Object,
          _id: { type: Number },
          code: { type: String },
          district: { type: Number },
          macroregion: { type: Number },
          name: { type: String },
          province: { type: Number },
          region: { type: Number },
        },
        working: {
          type: Object,
          open: { type: Number },
          close: { type: Number },
        },
      },
    },
    status_queue: {
      type: Number,
      require: true,
    },
    total: {
      type: Number,
      require: true,
    },
    code: {
      type: String,
      require: true,
    },
    sale: {
      type: String,
      require: true,
    },
    sales_type: {
      type: String,
      require: true,
    },
    source: {
      type: String,
      require: true,
    },
    type: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
