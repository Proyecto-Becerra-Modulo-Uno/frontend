import { Router } from "express";
import { ingresarcodigo, login, nuevousuario, recuperarusuario } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", login)
rutaPanel.get("/correo", recuperarusuario)
rutaPanel.get("/codigo", ingresarcodigo)
rutaPanel.get("/nuevousuario", nuevousuario)

export default rutaPanel