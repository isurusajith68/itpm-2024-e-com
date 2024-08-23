import express from "express";
import {
  createOrder,
  createPaymentIntent,
  getAllOrders,
  getOrdersByUserId,
} from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/", getAllOrders);
orderRouter.post("/", createOrder);
orderRouter.post("/create-payment-intent", createPaymentIntent);
orderRouter.get("/get-user-orders/:id", getOrdersByUserId);

export default orderRouter;
