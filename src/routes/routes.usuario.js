import { Router } from "express";
import { cambiarcontrasena, codigoRecuperacion, comLogs, detalles, dispositivosMovil, elegirAutentificacionDosPasos, eliminacionCuenta, exportardatos, historialcambios, ingresarcodigo, inicioAutentificacionDosPasos, nuevaClave, nuevousuario, perfil, politicas, preguntas, recuperarClave, recuperarusuario, sesionesActivasDesktop } from "../controllers/usuarios.controllers.js";

const rutaUsuario = Router();

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/recuperarClave", recuperarClave);
rutaUsuario.get("/codigoRecuperacion", codigoRecuperacion);
rutaUsuario.get("/nuevousuario", nuevousuario)
rutaUsuario.get("/nuevaClave", nuevaClave);
rutaUsuario.get("/contrasena", cambiarcontrasena);
rutaUsuario.get("/comlogs", comLogs);
rutaUsuario.get("/correo", recuperarusuario);
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad",politicas);
rutaUsuario.get("/detalles", detalles);
rutaUsuario.get("/historialc", historialcambios);
rutaUsuario.get("/eliminacionCuenta",eliminacionCuenta);
rutaUsuario.get("/perfil",perfil);
rutaUsuario.get("/inicio-autentificaion-dos-pasos",inicioAutentificacionDosPasos);
rutaUsuario.get("/elegir-autentificaion-dos-pasos",elegirAutentificacionDosPasos);
rutaUsuario.get("/exportar-datos", exportardatos);
rutaUsuario.get("/sesiones-desktop", sesionesActivasDesktop);
rutaUsuario.get("/dispositivos", dispositivosMovil); // ????

export default rutaUsuario
