import { Router } from "express";
import rutaPanel from "./routes.panel.js";
import rutaRecuperarClave from "./routes.recuperarClave.js";
import rutaPreguntas from "./routes.usuario.js";


const ruta = Router();

ruta.use("/", rutaPanel);
<<<<<<< HEAD
ruta.use("/", rutaRecuperarClave);
=======
>>>>>>> 51eb4038dd29904ce27ce60601635325086b2fe8
ruta.use("/", rutaPreguntas);

export default ruta