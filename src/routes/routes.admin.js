import { Router } from "express";
import {
  condicionesc,
  config,
  cuentasbloqueadas,
  nuevousuario,
  panel,
  registro,
  registroIngreso,
  registroSesion,
  verificacionDoble1,
  verificacionDoble2,
  verRegistro,
} from "../controllers/admins.controllers.js";
const rutaAdmin = Router();

rutaAdmin.get("/panel", panel);
rutaAdmin.get("/nuevousuario", nuevousuario);
rutaAdmin.get("/registro", registro);
rutaAdmin.get("/registros", verRegistro);
rutaAdmin.get("/co", condicionesc);
rutaAdmin.get("/verificacionDoble1", verificacionDoble1);
rutaAdmin.get("/verificacionDoble2", verificacionDoble2);
rutaAdmin.get("/registroIngreso", registroIngreso);
rutaAdmin.get("/config", config);
rutaAdmin.get("/sesiones", registroSesion);
rutaAdmin.get("/bloqueos", cuentasbloqueadas);

export default rutaAdmin;
