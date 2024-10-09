import { Router } from "express";

import { panel, registro, cuentasbloqueadas, usuariosInactivos, grupos, configurarLogs, registroDispositivos} from "../controllers/admins.controllers.js";

import { condicionesc, configuracion, notipopup, verificacionDoble1, verificacionDoble2 } from "../controllers/admins.controllers.js";
import { notiActi, vistaprincipalusuario } from "../controllers/usuarios.controllers.js";
import { nuevousuario, retencion} from "../controllers/admins.controllers.js";
import { complejidadPreguntas, informeActividad } from "../controllers/admins.controllers.js";
import { configuracionPoliticas, crearBackup, exportdata, listarBackups, preguntasSeguridad, restaurarBackup, ssl } from "../controllers/admins.controllers.js";
import {  panel_control_seguridad, reporting} from "../controllers/admins.controllers.js";


const rutaAdmin = Router();
// Rutas organizadas

rutaAdmin.get("/panel", panel);

rutaAdmin.get("/admin/registro", registro);
rutaAdmin.get("/admin/cuentas-bloqueadas", cuentasbloqueadas);
rutaAdmin.get("/admin/usuarios-inactivos", usuariosInactivos);
rutaAdmin.get("/admin/crear-grupos", grupos);

rutaAdmin.get("/admin/logs", configurarLogs);

rutaAdmin.get("/admin/registro-dispositivos", registroDispositivos)
// Rutas desorganizadas

rutaAdmin.get("/notipop", notipopup)//???
rutaAdmin.get("/notia", notiActi)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/verificacionDoble1", verificacionDoble1)
rutaAdmin.get("/verificacionDoble2", verificacionDoble2)
rutaAdmin.get("/config", configuracion)

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


rutaAdmin.get("/reporteingrso", reporting)
rutaAdmin.get("/panel-seguridad", panel_control_seguridad)

export default rutaAdmin