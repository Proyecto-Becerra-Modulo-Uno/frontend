import { Router } from "express";

import { condicionesc, configuracion, cuentasbloqueadas,notipopup, nuevousuario, panel, registro, registroSesion, retencion, verificacionDoble1, verificacionDoble2} from "../controllers/admins.controllers.js";
import {  complejidadPreguntas, grupos, informeActividad, } from "../controllers/admins.controllers.js";

const rutaAdmin = Router();

rutaAdmin.get("/panel", panel);
rutaAdmin.get("/notipop", notipopup);//???
rutaAdmin.get("/registro", registro);
rutaAdmin.get("/co", condicionesc);
rutaAdmin.get("/verificacionDoble1", verificacionDoble1);
rutaAdmin.get("/verificacionDoble2", verificacionDoble2);
rutaAdmin.get("/config", configuracion);
rutaAdmin.get("/sesiones", registroSesion);


rutaAdmin.get("/bloqueos", cuentasbloqueadas);
rutaAdmin.get("/datos", retencion);

rutaAdmin.get("/grupos", grupos);
rutaAdmin.get("/nuevousuario", nuevousuario);
rutaAdmin.get("/complejidadPreguntas", complejidadPreguntas)
rutaAdmin.get("/informeActividad", informeActividad)


export default rutaAdmin;
