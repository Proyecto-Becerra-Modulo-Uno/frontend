import { Router } from "express";
import { panel, verificacionDoble1,verificacionDoble2 } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel)

rutaPanel.get("/verificacionDoble1", verificacionDoble1)

rutaPanel.get("/verificacionDoble2", verificacionDoble2)

export default rutaPanel 