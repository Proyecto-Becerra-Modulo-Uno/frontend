import { Router } from "express";
import { condicionesc, complejidadPreguntas, cuentasbloqueadas, grupos, informeActividad, notipopup, nuevousuario, panel, registro, registroSesion, verificacionDoble1, verificacionDoble2, configuracion } from "../controllers/admins.controllers.js";
import { comLogs } from "../controllers/usuarios.controllers.js";
const rutaAdmin = Router();

rutaAdmin.get("/panel", panel);
rutaAdmin.get("/notipop", notipopup);//???
rutaAdmin.get("/registro", registro);
rutaAdmin.get("/co", condicionesc);
rutaAdmin.get("/logs", comLogs);
rutaAdmin.get("/verificacionDoble1", verificacionDoble1);
rutaAdmin.get("/verificacionDoble2", verificacionDoble2);
rutaAdmin.get("/config", configuracion);
rutaAdmin.get("/sesiones", registroSesion);
rutaAdmin.get("/bloqueos", cuentasbloqueadas)//ya corregido
rutaAdmin.get("/grupos", grupos);
rutaAdmin.get("/nuevousuario", nuevousuario);
rutaAdmin.get("/complejidadPreguntas", complejidadPreguntas)
rutaAdmin.get("/informeActividad", informeActividad)

export default rutaAdmin;
