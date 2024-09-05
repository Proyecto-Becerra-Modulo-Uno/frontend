import { Router } from "express";
import rutaAdmin from "./routes.admin.js";

const ruta = Router();

ruta.use("/", rutaAdmin);

export default ruta;