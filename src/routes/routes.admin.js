import { Router } from "express";
import { configuracionPoliticas, exportdata, preguntasSeguridad } from "../controllers/admins.controllers.js";
const rutaAdmin = Router();

rutaAdmin.get("/SeguridadPreguntas", preguntasSeguridad)
rutaAdmin.get("/ConfiguracionPoliticas", configuracionPoliticas)
rutaAdmin.get("/export-data", exportdata)

export default rutaAdmin