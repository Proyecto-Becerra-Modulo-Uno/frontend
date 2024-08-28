import { Router } from "express";
import { panel } from "../controllers/controllers.js";
import { cambiarRolUsuario, listarUsuarios } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel);
rutaPanel.get("/usuarios", listarUsuarios);
rutaPanel.post("/cambiar-rol", cambiarRolUsuario);

export default rutaPanel;