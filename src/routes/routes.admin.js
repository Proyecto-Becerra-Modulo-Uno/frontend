import { Router } from "express";
import { condicionesc, nuevousuario, panel, registro, registroIngreso, verificacionDoble1, verificacionDoble2, verRegistro } from "../controllers/admins.controllers.js";

const rutaAdmin = Router();

rutaAdmin.get("/panel", panel)
rutaAdmin.get("/nuevousuario", nuevousuario)
rutaAdmin.get("/registro", registro)
rutaAdmin.get("/registros", verRegistro)
rutaAdmin.get("/co", condicionesc)
rutaAdmin.get("/verificacionDoble1", verificacionDoble1)
rutaAdmin.get("/verificacionDoble2", verificacionDoble2)
rutaAdmin.get("/registroIngreso", registroIngreso)

export default rutaAdmin
