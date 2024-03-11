const productModel = require("./../models/product.model");

class productServices {
  static async addProductService(productData) {
    try {
      const newProduct = new productModel({ ...productData });

      return await newProduct.save();
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async getProductService() {
    try {
      const newProduct = await productModel.find();

      if (newProduct) {
        return newProduct;
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

}

module.exports = productServices;