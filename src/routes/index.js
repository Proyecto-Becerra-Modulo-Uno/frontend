import { Router } from "express";
import rutaPanel from "./routes.panel.js";
import rutaPreguntas from "./routes.usuario.js";

const ruta = Router();

ruta.use("/", rutaPanel);
ruta.use("/usuarios", rutaPreguntas);

export default ruta;
