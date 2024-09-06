import { Router } from "express";
import { condicionesc, complejidadPreguntas, cuentasbloqueadas, informeActividad, notipopup, nuevousuario, panel, registro, registroSesion, verificacionDoble1, verificacionDoble2, configuracion } from "../controllers/admins.controllers.js";

const rutaAdmin = Router();

rutaAdmin.get("/notipop", notipopup)//???
rutaAdmin.get("/panel", panel);
rutaAdmin.get("/nuevousuario", nuevousuario);
rutaAdmin.get("/sesiones", registroSesion);
rutaAdmin.get("/registro", registro)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/verificacionDoble1", verificacionDoble1)
rutaAdmin.get("/verificacionDoble2", verificacionDoble2)
rutaAdmin.get("/complejidadPreguntas", complejidadPreguntas)
rutaAdmin.get("/config", configuracion)
rutaAdmin.get("/sesiones", registroSesion)
rutaAdmin.get("/bloqueos", cuentasbloqueadas)
rutaAdmin.get("/informeActividad", informeActividad)

export default rutaAdmin;
