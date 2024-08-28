import { Router } from "express";
import { login, recuperarusuario } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", login)
rutaPanel.get("/correo", recuperarusuario)

export default rutaPanel