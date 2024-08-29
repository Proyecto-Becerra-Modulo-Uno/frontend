import { Router } from "express";
import rutaHome from "./routes.home.js";
import rutaAdmin from "./routes.admin.js";
import rutaUsuario from "./routes.usuario.js";

const ruta = Router();

ruta.use("/", rutaHome);
ruta.use("/", rutaAdmin);
ruta.use("/", rutaUsuario);

export default ruta