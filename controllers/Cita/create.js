import Cita from "../../models/Cita.js";

const createCita = async (req, res) => {
  try {
    const nuevaCita = new Cita(req.body);
    const citaGuardada = await nuevaCita.save();
    res.status(201).json(citaGuardada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default createCita;
