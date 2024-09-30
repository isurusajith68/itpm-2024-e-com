import Fuel from "../model/RequestFuel.js";


export const getFuelReqst = async (req, res) => {
  try {
    const fuel = await Fuel.find();

    res.status(200).json({ fuel });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFuelReqst = async (req, res) => {
  try {
    const fuel = req.body;

    const newFuelReq = new Fuel(fuel);

    await newFuelReq.save();

    res.status(201).json({ fuel: newFuelReq });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFuelReqstById = async (req, res) => {
  try {
    const { id } = req.params;

    const fuel = await Fuel.findById(id);

    if (!fuel) {
      return res.status(404).json({ message: "Fuel Reqst not found" });
    }

    res.status(200).json({ fuel });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFuelReqst = async (req, res) => {
  try {
    const { id } = req.params;
    const { distance,cost, date } = req.body;

    const fuel = await Fuel.findById(id);

    if (!fuel) {
      return res.status(404).json({ message: "Fuel reqst not found" });
    }

    fuel.distance = distance || fuel.distance;
    fuel.cost = cost || fuel.cost;
    fuel.date = date || fuel.date;
    
    const updateFuelReqst = await fuel.save();

    res.status(200).json({ fuel: updateFuelReqst });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete salary

export const deleteFuelReqst = async (req, res) => {
  try {
    const { id } = req.params;

    const fuel = await Fuel.findByIdAndDelete(id);

    if (!fuel) {
      return res.status(404).json({ message: "Fuel Reqst not found" });
    }

    res.status(200).json({ message: "Fuel Reqst deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
