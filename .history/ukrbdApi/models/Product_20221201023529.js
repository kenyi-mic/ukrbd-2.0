const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    image: { type: String, required: true, unique: true },
    categories: { type: Array },
    varience: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true, unique: true, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
