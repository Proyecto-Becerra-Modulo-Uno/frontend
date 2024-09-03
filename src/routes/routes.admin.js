import { Router } from "express";
import { condicionesc, configuracion, cuentasbloqueadas, dispositivos, historialacceso, notipopup, panel, registro, registroIngreso, registroSesion, verificacionDoble1, verificacionDoble2, verRegistro } from "../controllers/admins.controllers.js";
const rutaAdmin = Router();

rutaAdmin.get("/panel", panel)
rutaAdmin.get("/dis", dispositivos)
rutaAdmin.get("/notipop", notipopup)//???
rutaAdmin.get("/registro", registro)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/verificacionDoble1", verificacionDoble1)
rutaAdmin.get("/verificacionDoble2", verificacionDoble2)
rutaAdmin.get("/config", configuracion)
// rutaAdmin.get("/registroIngreso", registroIngreso)
// rutaAdmin.get("/historiala", historialacceso);
// rutaAdmin.get("/sesiones", registroSesion)
rutaAdmin.get("/bloqueos", cuentasbloqueadas)//???

export default rutaAdmin
