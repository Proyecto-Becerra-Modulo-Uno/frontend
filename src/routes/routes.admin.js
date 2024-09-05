import { Router } from "express";

import { condicionesc, config, nuevousuario, panel, registro, registroIngreso, registroSesion, verificacionDoble1, verificacionDoble2, verRegistro, complejidadPreguntas, cuentasbloqueadas, informeActividad } from "../controllers/admins.controllers.js";
const rutaAdmin = Router();

rutaAdmin.get("/panel", panel)
rutaAdmin.get("/nuevousuario", nuevousuario)
rutaAdmin.get("/registro", registro)
rutaAdmin.get("/registros", verRegistro)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/verificacionDoble1", verificacionDoble1)
rutaAdmin.get("/verificacionDoble2", verificacionDoble2)
rutaAdmin.get("/registroIngreso", registroIngreso)
rutaAdmin.get("/complejidadPreguntas", complejidadPreguntas)
rutaAdmin.get("/config", config)
rutaAdmin.get("/sesiones", registroSesion)
rutaAdmin.get("/bloqueos", cuentasbloqueadas)
rutaAdmin.get("/informeActividad", informeActividad)


export default rutaAdmin;
