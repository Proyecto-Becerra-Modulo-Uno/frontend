import { Router } from "express";
import { condicionesc, configuracion, nuevousuario, panel, registro, registroSesion, verificacionDoble1, verificacionDoble2, verRegistro } from "../controllers/admins.controllers.js";

const rutaAdmin = Router();

rutaAdmin.get("/panel", panel)
rutaAdmin.get("/nuevousuario", nuevousuario)
rutaAdmin.get("/registro", registro)
rutaAdmin.get("/registros", verRegistro)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/verificacionDoble1", verificacionDoble1)
rutaAdmin.get("/verificacionDoble2", verificacionDoble2)
rutaAdmin.get("/config", configuracion)
rutaAdmin.get("/sesiones", registroSesion)
export default rutaAdmin
