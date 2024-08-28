import { Router } from "express";
import { panel, politicas, registro } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel)
rutaPanel.get("/privacidad",politicas)
rutaPanel.get("/registro",registro)
export default rutaPanel