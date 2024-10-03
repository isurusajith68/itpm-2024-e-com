import express from "express";
import { createFeedback, deleteFeedback, getFeedback, updateFeedBack } from "../controller/feedbackController.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/", getFeedback);
feedbackRouter.post("/", createFeedback);
feedbackRouter.delete("/:id", deleteFeedback);
feedbackRouter.put("/:id", updateFeedBack);


export default feedbackRouter;
