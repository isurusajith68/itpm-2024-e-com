import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  processor: {
    type: String,
    required: [true, "Product category is required"],
  },
  os: {
    type: String,
    required: [true, "Product category is required"],
  },
  graphics: {
    type: String,
    required: [true, "Product category is required"],
  },
  storage: {
    type: String,
    required: [true, "Product category is required"],
  },
  image: {
    type: String,
  },
  promotion: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Number,
    default: 0,
  },
  ratting: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
