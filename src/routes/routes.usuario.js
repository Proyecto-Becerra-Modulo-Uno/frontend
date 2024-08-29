import { Router } from "express";
import {
  cambiarcontrasena,
  codigoRecuperacion,
  ingresarcodigo,
  nuevaClave,
  politicas,
  preguntas,
  recuperarClave,
  recuperarusuario,
} from "../controllers/usuarios.controllers.js";

const rutaUsuario = Router();

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/recuperarClave", recuperarClave);
rutaUsuario.get("/codigoRecuperacion", codigoRecuperacion);
rutaUsuario.get("/nuevaClave", nuevaClave);
rutaUsuario.get("/contrasena", cambiarcontrasena);
rutaUsuario.get("/correo", recuperarusuario);
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad", politicas);

export default rutaUsuario;
