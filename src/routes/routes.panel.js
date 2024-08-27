import { Router } from "express";
import { panel } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel)

export default rutaPanel