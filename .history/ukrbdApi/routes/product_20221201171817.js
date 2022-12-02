const { verifiedTokenAndAdmin } = require("./verifiedToken");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const Product = require("../models/Product");

//CREAT NEW PRODUCT
router.post("/new", verifiedTokenAndAdmin, (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    console.error(err);
  }
});

//UPDATE PRODUCT
router.put("/:id", verifiedTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json("Didn't update because: ", err);
  }
});

//DELETE PRODUCT
router.delete("/:id", verifiedTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json("Product not deleted");
  }
});

//GET PRODUCT
router.get("/get/:id", async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const join = req.query;

  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ _id: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else if (join) {
      products = await Product.aggregate([
        {
          $lookup: {
            from: "categories",
            localField: "categories[0]",
            foreignField: "title",
            as: "categories",
          },
        },
      ]);
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
