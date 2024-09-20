import { Router } from "express";
import { condicionesc, configuracion, cuentasbloqueadas, notipopup, panel, registro, registroDispositivos, verificacionDoble1, verificacionDoble2 } from "../controllers/admins.controllers.js";
import { comLogs, notiActi, vistaprincipalusuario } from "../controllers/usuarios.controllers.js";
import { nuevousuario, retencion} from "../controllers/admins.controllers.js";
import { complejidadPreguntas, grupos, informeActividad } from "../controllers/admins.controllers.js";
import { configuracionPoliticas, crearBackup, exportdata, listarBackups, preguntasSeguridad, restaurarBackup, ssl } from "../controllers/admins.controllers.js";
import {  panel_control_seguridad, reporting} from "../controllers/admins.controllers.js";


const rutaAdmin = Router();
// Rutas organizadas

rutaAdmin.get("/panel", panel);
rutaAdmin.get("/admin/registro", registro);
rutaAdmin.get("/cuentas-bloqueadas", cuentasbloqueadas);

rutaAdmin.get("/crear-grupos", grupos);

// Rutas desorganizadas

rutaAdmin.get("/notipop", notipopup)//???
rutaAdmin.get("/notia", notiActi)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/verificacionDoble1", verificacionDoble1)
rutaAdmin.get("/verificacionDoble2", verificacionDoble2)
rutaAdmin.get("/config", configuracion)

rutaAdmin.get("/datos", retencion);
rutaAdmin.get("/nuevousuario", nuevousuario);
rutaAdmin.get("/complejidadPreguntas", complejidadPreguntas)
rutaAdmin.get("/informeActividad", informeActividad)
rutaAdmin.get("/SeguridadPreguntas", preguntasSeguridad)
rutaAdmin.get("/ConfiguracionPoliticas", configuracionPoliticas)
rutaAdmin.get("/export-data", exportdata)
rutaAdmin.get('/ssl', ssl)
rutaAdmin.get('/backups', listarBackups);
rutaAdmin.post('/create-backup', crearBackup);
rutaAdmin.post('/restore-backup', restaurarBackup);
rutaAdmin.get("/principalusuario", vistaprincipalusuario);
// rutaAdmin.get("/sesiones", registrosesiones);//no entiendo porque no esta verifica esta 


rutaAdmin.get("/logs", comLogs);

rutaAdmin.get("/reporteingrso", reporting)
rutaAdmin.get("/panel-seguridad", panel_control_seguridad)

export default rutaAdmin