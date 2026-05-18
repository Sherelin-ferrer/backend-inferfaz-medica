import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import citasRouter from "./router/citasRouter.js";
import authRouter from "./router/authRouter.js"

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Ruta base

app.use("/api/citas", citasRouter);
app.use("/api/auth", authRouter);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
