import Router from "express";
import rutaPanel from "./routes.panel.js";
import rutaRecuperarClave from "./routes.recuperarClave.js";

const ruta = Router();

ruta.use("/", rutaPanel);
ruta.use("/", rutaRecuperarClave);

export default ruta;
