import { Router } from "express";

import rutaHome from "./routes.home.js";
import rutaAdmin from "./routes.admin.js";
import rutaUsuario from "./routes.usuario.js";
import rutaModerador from "./routes.moderador.js";
import rutaInvitado from "./routes.invitado.js";

const ruta = Router();

ruta.use("/", rutaHome);
ruta.use("/", rutaAdmin);
ruta.use("/", rutaUsuario);
ruta.use("/", rutaModerador);
ruta.use("/", rutaInvitado)
export default ruta;