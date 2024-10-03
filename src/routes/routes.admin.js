import { Router } from "express";
import { configuracionPoliticas, crearBackup, exportdata, historial, listarBackups, preguntasSeguridad, restaurarBackup, ssl } from "../controllers/admins.controllers.js";
const rutaAdmin = Router();

rutaAdmin.get("/SeguridadPreguntas", preguntasSeguridad)
rutaAdmin.get("/ConfiguracionPoliticas", configuracionPoliticas)
rutaAdmin.get("/export-data", exportdata)
rutaAdmin.get('/ssl', ssl)
rutaAdmin.get('/backups', listarBackups);
rutaAdmin.post('/create-backup', crearBackup);
rutaAdmin.post('/restore-backup', restaurarBackup);
rutaAdmin.get('/historial', historial);

export default rutaAdmin
