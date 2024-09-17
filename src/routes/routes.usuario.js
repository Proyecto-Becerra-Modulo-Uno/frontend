import { Router } from "express";

import { cambiarcontrasena, codigoRecuperacion, comLogs, detalles, dispositivosMovil, elegirAutentificacionDosPasos, eliminacionCuenta, exportardatos, historialcambios, ingresarcodigo, inicioAutentificacionDosPasos, nuevaClave, nuevousuario, panelUsuario, perfil, politicas, preguntas, recuperarClave, recuperarusuario, sesionesActivasDesktop, listaBN } from "../controllers/usuarios.controllers.js";


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
rutaUsuario.get("/listabn", listaBN);
rutaUsuario.get("/dispositivos", dispositivosMovil); // ???? Ni idea de qué es esto
//rutaUsuario.get("/historiala", historialacceso); // Admin
rutaUsuario.get("/exportar-datos", exportardatos);
rutaUsuario.get("/sesiones-desktop", sesionesActivasDesktop);
rutaUsuario.get("/dispositivos", dispositivosMovil); // ????

// Ruta usuario
rutaUsuario.get("/panelUsuario", panelUsuario);

export default rutaUsuario

