
import { Router } from "express";
import createCita from "../controllers/Cita/create.js";
import getCitas from "../controllers/Cita/read.js";
import updateCita from "../controllers/Cita/update.js";
import deleteCita from "../controllers/Cita/delete.js";

const router = Router();

router.post("/create", createCita);
router.get("/read", getCitas);
router.put("/update/:id", updateCita);
router.delete("/delete/:id", deleteCita);

export default router;
