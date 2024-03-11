const productServices = require("./../../services/product_services");
const stockServices = require('./../../services/stocks_services');

class productController {
  static async addProduct(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Aucun fichier téléchargé." });
      }

      const { productName, productSize, category } = req.body;

      const picture = {
        file_path: req.file.path,
        file_name: req.file.originalname,
        size: req.file.size,
      };

      const sizeArray = productSize.split(",");
      const categoryArray = category.split(",");

      const productAdded = await productServices.addProductService({
        ...req.body,
        picture,
        productSize: sizeArray,
        category: categoryArray,
      });

      const stockName = "stock de" + " " + productName;
      const stockAdded = await stockServices.addStockService(stockName, productAdded._id);

      if (productAdded && stockAdded) {
        res
          .status(200)
          .json({ message: "produit ajouté avec succés avec le stock", productAdded, stockAdded });
      } else {
        res.status(500).json({ error: "échec de l' ajout du produit" });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async getAllProduct(req, res) {
    try {
      console.log("header: ", req.headers.authorization);
      const allProduct = await productServices.getProductService();

      if (allProduct) {
        res.status(200).json({
          message: "Récupération de tous les produits avec succés",
          allProduct,
        });
      } else {
        res
          .status(500)
          .json({ error: "échec de la récupération de tous les produits" });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}                       
module.exports = productController;