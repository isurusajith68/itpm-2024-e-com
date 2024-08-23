import Order from "../model/orders.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);
export const createPaymentIntent = async (req, res) => {
  const { cart, shippingAddress, totalPrice, user } = req.body;
  console.log("cart", cart);
  console.log("shippingAddress", shippingAddress);
  console.log("totalPrice", totalPrice);
  console.log("user", user);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: "usd",
      payment_method_types: ["card"],
      // description: `Order for user ${user._id}`,
    });

    res.status(201).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { cart, shippingAddress, paymentMethod, totalPrice, user } = req.body;

    const newOrder = new Order({
      orderItems: cart,
      shippingAddress,
      paymentMethod,
      totalPrice,
      user,
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user");

    res.status(200).json(orders);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getOrdersByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.id });

    res.status(200).json(orders);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
