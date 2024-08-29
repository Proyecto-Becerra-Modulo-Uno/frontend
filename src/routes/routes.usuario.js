import { Router } from "express";
import { cambiarcontrasena, ingresarcodigo, perfil, politicas, preguntas, recuperarClave, recuperarusuario } from "../controllers/usuarios.controllers.js";

const rutaUsuario = Router();

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/recuperarClave", recuperarClave);
rutaUsuario.get("/contrasena", cambiarcontrasena);
rutaUsuario.get("/correo", recuperarusuario);
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad",politicas);
rutaUsuario.get("/perfil",perfil);

export default rutaUsuario
