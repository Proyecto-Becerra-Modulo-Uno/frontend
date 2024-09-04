import { Router } from "express";
import {
  cambiarcontrasena,
  codigoRecuperacion,
  dispositivosMovil,
  elegirAutentificacionDosPasos,
  eliminacionCuenta,
  historialacceso,
  ingresarcodigo,
  inicioAutentificacionDosPasos,
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
rutaUsuario.get(
  "/inicio-autentificaion-dos-pasos",
  inicioAutentificacionDosPasos
);
rutaUsuario.get(
  "/elegir-autentificaion-dos-pasos",
  elegirAutentificacionDosPasos
);
rutaUsuario.get("/dispositivos", dispositivosMovil);
rutaUsuario.get("/historiala", historialacceso);
rutaUsuario.get("/eliminacionCuenta", eliminacionCuenta);

export default rutaUsuario;
