import Feedback from "../model/Feedback.js";

export const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("user").populate("order");

    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createFeedback = async (req, res) => {
  const { user, rating, feedback, order } = req.body;

  try {
    const newFeedback = new Feedback({
      user,
      rating,
      feedback,
      order,
    });

    await newFeedback.save();

    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
