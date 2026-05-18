import mongoose from "mongoose";

const citaSchema = new mongoose.Schema(
  {
    paciente: {
      type: String,
      required: true
    },
    medico: {
      type: String,
      required: true
    },
    fecha: {
      type: Date,
      required: true
    },
    motivo: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      enum: ["pendiente", "confirmada", "cancelada"],
      default: "pendiente"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Cita", citaSchema);
