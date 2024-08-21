import RequestSupplier from "../model/RequestSupplier.js";

export const getSupRequest = async (req, res) => {
  try {
    const suppliers = await RequestSupplier.find();
    res.status(200).json({ suppliers });
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

export const putSupRequest = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const supplier = await RequestSupplier.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json({ supplier });
  }

  catch (error) {
    res.status(500).json({ message: error.message });
  }

}
