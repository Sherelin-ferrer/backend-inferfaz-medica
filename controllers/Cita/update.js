import Cita from "../../models/Cita.js";

const updateCita = async (req, res) => {
  try {
    const citaActualizada = await Cita.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!citaActualizada) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }

    res.json(citaActualizada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateCita;
