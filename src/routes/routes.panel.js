import { Router } from "express";
import { condicionesc, login, panel, politicas, registro, verificacionDoble1,verificacionDoble2 } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel)
rutaPanel.get("/co", condicionesc)
rutaPanel.get("/verificacionDoble1", verificacionDoble1)
rutaPanel.get("/verificacionDoble2", verificacionDoble2)
rutaPanel.get("/privacidad",politicas)
rutaPanel.get("/registro",registro)
rutaPanel.get("/panel", panel)
rutaPanel.get("/login", login)

export default rutaPanel 