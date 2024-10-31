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

rutaAdmin.get("/admin/panel", panel); //Listo
rutaAdmin.get("/admin/registro", registro); //Listo
rutaAdmin.get("/admin/cuentas-bloqueadas", cuentasbloqueadas); //Listo
rutaAdmin.get("/admin/usuarios-inactivos", usuariosInactivos); //Listo
rutaAdmin.get("/admin/crear-grupos", grupos); //Listo
rutaAdmin.get("/admin/configurar-logs", configurarLogs); //Listo
rutaAdmin.get("/admin/logs-seguridad", reporting) //Listo
rutaAdmin.get("/admin/registro-dispositivos", registroDispositivos) //Listo
rutaAdmin.get("/admin/panel-seguridad", panel_control_seguridad) //Listo
rutaAdmin.get("/admin/configurar-intentos-sesion", configuracion) //Listo
rutaAdmin.get("/admin/informe-actividad", informeActividad) //Listo

// Rutas desorganizadas

rutaAdmin.get("/notipop", notipopup)
rutaAdmin.get("/notia", notiActi)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/admin/autenticacion-doble", verificacionDoble1)
rutaAdmin.get("/admin/autenticacion-doble/step-1", verificacionDoble2)

rutaAdmin.get("/nuevousuario", nuevousuario);
rutaAdmin.get("/complejidadPreguntas", complejidadPreguntas)
rutaAdmin.get("/SeguridadPreguntas", preguntasSeguridad)
rutaAdmin.get("/ConfiguracionPoliticas", configuracionPoliticas)
rutaAdmin.get("/export-data", exportdata)
rutaAdmin.get('/ssl', ssl)
rutaAdmin.get('/backups', listarBackups);
rutaAdmin.post('/create-backup', crearBackup);


rutaAdmin.post('/restore-backup', restaurarBackup);



export default rutaAdmin