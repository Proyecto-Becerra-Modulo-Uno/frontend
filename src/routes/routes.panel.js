import { Router } from "express";
import { cambiarcontrasena, panel } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel)
rutaPanel.get("/contrasena", cambiarcontrasena)

export default rutaPanel;