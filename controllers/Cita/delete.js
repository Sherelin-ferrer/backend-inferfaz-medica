import Cita from "../../models/Cita.js";

const deleteCita = async (req, res) => {
  try {
    const citaEliminada = await Cita.findByIdAndDelete(req.params.id);

    if (!citaEliminada) {
      return res.status(404).json({ message: "Cita no encontrada" });
    }

    res.json({ message: "Cita eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default deleteCita;
