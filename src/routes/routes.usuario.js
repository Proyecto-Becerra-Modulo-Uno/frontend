import { Router } from "express";
import { preguntas } from "../controllers/usuarios.controllers.js";

const rutaPreguntas = Router();

rutaPreguntas.get("/preguntas", preguntas);

export default rutaPreguntas;