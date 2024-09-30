import mongoose from "mongoose";

const requestFuleSchema = new mongoose.Schema({
  distance: {
    type: Number,
    required: [true, "Distance is required"],
  },
  cost: {
    type: String,
    required: [true, "Product category is required"],
  },
  date: {
    type: Date,
  },
  
});

const Fuel = mongoose.model("Fuel", requestFuleSchema);

export default Fuel;
