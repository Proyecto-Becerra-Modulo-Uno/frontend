import { Router } from "express";
import { condicionesc, panel } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel)
rutaPanel.get("/co", condicionesc)


export default rutaPanel