import { Router } from "express";
import { condicionesc, dispositivos, notipopup, panel } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel)
rutaPanel.get("/co", condicionesc)
rutaPanel.get("/dis", dispositivos)
rutaPanel.get("/notipop", notipopup)




export default rutaPanel