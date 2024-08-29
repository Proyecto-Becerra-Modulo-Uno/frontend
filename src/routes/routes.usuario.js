import { Router } from "express";
import { cambiarcontrasena, ingresarcodigo, politicas, preguntas, recuperarClave, recuperarusuario } from "../controllers/usuarios.controllers.js";

const rutaUsuario = Router();

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/recuperarClave", recuperarClave);
rutaUsuario.get("/contrasena", cambiarcontrasena);
rutaUsuario.get("/recuperar", recuperarusuario);
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad",politicas);

export default rutaUsuario
