import Cita from "../../models/Cita.js";

const getCitas = async (req, res) => {
  try {
    const citas = await Cita.find();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getCitas;
