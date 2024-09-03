import { Router } from "express";
import { cambiarcontrasena, codigoRecuperacion, dispositivosMovil, elegirAutentificacionDosPasos, ingresarcodigo, inicioAutentificacionDosPasos, nuevaClave, nuevousuario, perfil, politicas, preguntas, recuperarClave, recuperarusuario } from "../controllers/usuarios.controllers.js";

const rutaUsuario = Router();

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/recuperarClave", recuperarClave);
rutaUsuario.get("/codigoRecuperacion", codigoRecuperacion);
rutaUsuario.get("/nuevousuario", nuevousuario)
rutaUsuario.get("/nuevaClave", nuevaClave);
rutaUsuario.get("/contrasena", cambiarcontrasena);
rutaUsuario.get("/correo", recuperarusuario);
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad",politicas);
rutaUsuario.get("/perfil",perfil);
rutaUsuario.get("/inicio-autentificaion-dos-pasos",inicioAutentificacionDosPasos);
rutaUsuario.get("/elegir-autentificaion-dos-pasos",elegirAutentificacionDosPasos);
rutaUsuario.get("/dispositivos", dispositivosMovil);
 
export default rutaUsuario;