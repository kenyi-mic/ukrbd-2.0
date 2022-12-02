const { verifiedTokenAndAdmin } = require("./verifiedToken");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const Category = require("../models/Category");

//CREAT NEW PRODUCT
router.post("/new", verifiedTokenAndAdmin, (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    console.error(err);
  }
});

//UPDATE Category
router.put("/:id", verifiedTokenAndAdmin, async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //DELETE Category
// router.delete("/:id", verifiedTokenAndAdmin, async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res
//       .status(200)
//       .json({ success: true, message: "Product deleted successfully" });
//   } catch (err) {
//     res.status(500).json("Product not deleted");
//   }
// });

//GET PRODUCT
router.get("/get/:id", async (req, res) => {
  try {
    const Category = await Category.findById(req.params.id);
    res.status(200).json(Category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const join = req.query;

  try {
    let categories;
    if (qNew) {
      categories = await Category.find().sort({ _id: -1 }).limit(5);
    } else if (join) {
      categories = await Category.aggregate([
        {
          $lookup: {
            from: "products",
            localField: "title",
            foreignField: "categories[0]",
            as: "products",
          },
        },
      ]).pipeline();
    } else {
      categories = await Category.find();
    }

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
