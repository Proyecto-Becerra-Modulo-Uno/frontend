import { Router } from "express";
import rutaPanel from "./routes.panel.js";
import rutaRecuperarClave from "./routes.recuperarClave.js";
import rutaPreguntas from "./routes.usuario.js";


const ruta = Router();

ruta.use("/", rutaPanel);
ruta.use("/", rutaRecuperarClave);
ruta.use("/", rutaPreguntas);

export default ruta