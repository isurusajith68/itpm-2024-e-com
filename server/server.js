import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

import userRouter from "./router/userRouter.js";
import salaryRouter from "./router/salaryrouter.js";
import productRouter from "./router/productRouter.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.use("/salary", salaryRouter);
app.use("/products", productRouter);

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// MongoDB connection
connectMongoDB();
