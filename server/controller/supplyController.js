import mongoose from "mongoose";
import Supplier from "../model/Supplier.js";
import RequestSupplier from "../model/RequestSupplier.js";

export const getSupplies = async (req, res) => {
  try {
    const supplier = await Supplier.find();

    res.status(200).json({ supplier });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSupplyById = async (req, res) => {
  try {
    const { id } = req.params;

    const supplier = await Supplier.findById(id);

    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    res.status(200).json({ supplier });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSupply = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);

    res.status(201).json({ supplier });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSupply = async (req, res) => {
  try {
    const { id } = req.params;

    const supplier = await Supplier.findById(id);

    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    Object.keys(req.body).forEach((key) => {
      supplier[key] = req.body[key];
    });

    const updatedSupplier = await supplier.save();

    res.status(200).json({ supplier: updatedSupplier });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSupply = async (req, res) => {
  try {
    const { id } = req.params;

    const supplier = await Supplier.findByIdAndDelete(id);

    res.status(200).json({ message: "Supplier deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const supplyRequest = async (req, res) => {
  try {
    const supplier = await RequestSupplier.create(req.body);
    res.status(201).json({ supplier });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSupRequest = async (req, res) => {
  try {
    const suppliers = await RequestSupplier.find();
    res.status(200).json({ suppliers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getSupRequest2 = async (req, res) => {
  try {
    const suppliers = await RequestSupplier.find();
    res.status(200).json({ suppliers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const updateSupRequest = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const supplier = await RequestSupplier.findById(id);

//     if (!supplier) {
//       return res.status(404).json({ message: "Supplier not found" });
//     }

//     Object.keys(req.body).forEach((key) => {
//       supplier[key] = req.body[key];
//     });

//     const updatedSupplier = await supplier.save();

//     res.status(200).json({ supplier: updatedSupplier });

//     res.status(200).json({ message: "Supplier updated successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
