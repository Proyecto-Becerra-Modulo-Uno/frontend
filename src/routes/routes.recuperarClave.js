import { Router } from "express";
import { recuperarClave } from "../controllers/recuperarClave.controllers.js";

const rutaRecuperarClave = Router();

rutaRecuperarClave.get("/recuperarClave", recuperarClave);

export default rutaRecuperarClave;
