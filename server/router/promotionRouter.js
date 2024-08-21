import express from "express";

import {} from "../controller/promotionController.js";
import { createCoupon } from "../controller/promotionController.js";
import { getCoupons } from "../controller/promotionController.js";
import { getCouponById } from "../controller/promotionController.js";
import { deleteCoupon } from "../controller/promotionController.js";
import { updateCoupon } from "../controller/promotionController.js";

const promotionRouter = express.Router();

promotionRouter.get("/", getCoupons);
promotionRouter.get("/:id", getCouponById);
promotionRouter.post("/", createCoupon);
promotionRouter.put("/:id", updateCoupon);
promotionRouter.delete("/:id", deleteCoupon);

export default promotionRouter;
