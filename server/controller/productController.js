import Product from "../model/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = req.body;

    const newProduct = new Product(product);

    await newProduct.save();

    res.status(201).json({ product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;

    const existingProduct = await Product.findById(id);

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    existingProduct.productName =
      product.productName || existingProduct.productName;
    existingProduct.category = product.category || existingProduct.category;
    existingProduct.quantity = product.quantity || existingProduct.quantity;
    existingProduct.price = product.price || existingProduct.price;
    existingProduct.description =
      product.description || existingProduct.description;
    existingProduct.image = product.image || existingProduct.image;
    existingProduct.promotion = product.promotion || existingProduct.promotion;
    existingProduct.discount = product.discount || existingProduct.discount;
    existingProduct.ratting = product.ratting || existingProduct.ratting;

    const updatedProduct = await existingProduct.save();

    res.status(200).json({ product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
