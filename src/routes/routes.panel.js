import { Router } from "express";
import { panel, verRegistro } from "../controllers/panel.controllers.js";


const rutaPanel = Router();

rutaPanel.get("/", panel)
rutaPanel.get("/registros", verRegistro)

export default rutaPanel