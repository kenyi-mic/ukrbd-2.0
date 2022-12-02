const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    image: { type: String, required: true, unique: true },
    subCategory: {
      title: { type: String, required: true, unique: true },
      image: { type: String, required: true },
      des: { type: String, required: true },
    },
    varience: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", CategorySchema);
