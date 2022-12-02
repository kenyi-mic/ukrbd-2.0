//modules needed
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const authRoute = require("./routes/auth");

//initialization and variables
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
dotenv.config();
var cors = require("cors");
app.use(cors());

//conncect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected successfully!"))
  .catch((err) => console.log(err));

//end point
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);

//Enabling cors
app.get("/cors", (req, res) => {
  res.send("This has CORS enabled 🎈");
});

//Server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
