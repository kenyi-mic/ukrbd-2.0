const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    image: { type: String, required: true, unique: true },
    subCategory: {
      title: { type: String, required: true, unique: true },
      image: { type: String, required: true },
      desc: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", CategorySchema);
