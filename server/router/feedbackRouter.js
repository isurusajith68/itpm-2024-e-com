import express from "express";
import { createFeedback, deleteFeedback, getFeedback, getFeedBackssByUserId } from "../controller/feedbackController.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/", getFeedback);
feedbackRouter.post("/", createFeedback);
feedbackRouter.delete("/:id", deleteFeedback);


export default feedbackRouter;
