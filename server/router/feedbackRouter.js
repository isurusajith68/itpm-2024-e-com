import express from "express";
import { createFeedback, getFeedback } from "../controller/feedbackController.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/", getFeedback);
feedbackRouter.post("/", createFeedback);

export default feedbackRouter;
