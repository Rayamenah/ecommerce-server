import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const CartSchema = new Schema(
  {
    customerId: { type: String },
    items: [
      {
        product: {
          _id: { type: String },
          name: { type: String },
          desc: { type: String },
          banner: { type: String },
          type: { type: String },
          unit: { type: Number },
          price: { type: Number },
          supplier: { type: String },
        },
        unit: { type: Number, require: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

export default model("cart", CartSchema);
