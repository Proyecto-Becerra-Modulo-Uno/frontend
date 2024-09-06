import { Router } from "express";
import { condicionesc, configuracion, cuentasbloqueadas, notipopup, nuevousuario, panel, registro, registroSesion, verificacionDoble1, verificacionDoble2 } from "../controllers/admins.controllers.js";
const rutaAdmin = Router();

rutaAdmin.get("/notipop", notipopup)//???
rutaAdmin.get("/panel", panel);
rutaAdmin.get("/nuevousuario", nuevousuario);
rutaAdmin.get("/sesiones", registroSesion);
rutaAdmin.get("/registro", registro)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/verificacionDoble1", verificacionDoble1)
rutaAdmin.get("/verificacionDoble2", verificacionDoble2)
rutaAdmin.get("/config", configuracion)
rutaAdmin.get("/bloqueos", cuentasbloqueadas)//ya corregido

export default rutaAdmin;
