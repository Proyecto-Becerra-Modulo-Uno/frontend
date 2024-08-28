import Router from "express";
import rutaPanel from "./routes.panel.js";


const ruta = Router();

ruta.use("/", rutaPanel);


export default ruta