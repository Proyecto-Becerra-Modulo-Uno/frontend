import { Router } from "express";
import { configuracionPoliticas, preguntasSeguridad } from "../controllers/admins.controllers.js";
const rutaAdmin = Router();

rutaAdmin.get("/SeguridadPreguntas", preguntasSeguridad)
rutaAdmin.get("/ConfiguracionPoliticas", configuracionPoliticas)

export default rutaAdmin