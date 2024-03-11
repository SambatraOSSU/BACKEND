const express = require("express");
const router = express.Router();
const productController = require("./../controllers/clientControllers/products.controller");
const productUpload = require("./../middlewares/productUpload");

//route pour l' ajout d' un produit
router.post(
  "/add-product",
  productUpload.single("image"),
  productController.addProduct
);

router.get("/get-product", productController.getAllProduct);

module.exports = router;