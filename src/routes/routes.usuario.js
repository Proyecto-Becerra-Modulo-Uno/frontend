import { Router } from "express";
import { cambiarcontrasena, dispositivosMovil, elegirAutentificacionDosPasos, ingresarcodigo, inicioAutentificacionDosPasos, politicas, preguntas, recuperarClave, recuperarusuario, historialacceso } from "../controllers/usuarios.controllers.js";

const rutaUsuario = Router();

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/recuperarClave", recuperarClave);
rutaUsuario.get("/contrasena", cambiarcontrasena);
rutaUsuario.get("/correo", recuperarusuario);
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad",politicas);
rutaUsuario.get("/inicio-autentificaion-dos-pasos",inicioAutentificacionDosPasos);
rutaUsuario.get("/elegir-autentificaion-dos-pasos",elegirAutentificacionDosPasos);
rutaUsuario.get("/dispositivos", dispositivosMovil);
rutaUsuario.get("/historial", historialacceso);

export default rutaUsuario
