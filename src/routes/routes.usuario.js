import { Router } from "express";

import { cambiarcontrasena, codigoRecuperacion, comLogs, elegirAutentificacionDosPasos, ingresarcodigo, inicioAutentificacionDosPasos, listaBN, nuevaClave, nuevousuario, perfil, politicas, preguntas, recuperarClave, recuperarusuario} from "../controllers/usuarios.controllers.js";

import { detalles,  eliminacionCuenta, exportardatos, historialcambios, sesionesActivasDesktop } from "../controllers/usuarios.controllers.js";
import { historialacceso } from "../controllers/admins.controllers.js";
import { panelUsuario } from "../controllers/usuarios.controllers.js";


const rutaUsuario = Router();

//rutas organizadas
rutaUsuario.get("/recuperar-usuario", recuperarusuario);
rutaUsuario.get("/recuperar-clave", recuperarClave);
rutaUsuario.get("/nueva-clave", nuevaClave);
rutaUsuario.get("/codigo-recuperacion", codigoRecuperacion);

//rutas desorganizadas

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/nuevousuario", nuevousuario)
rutaUsuario.get("/contrasena", cambiarcontrasena);
rutaUsuario.get("/comlogs", comLogs);
// rutaUsuario.get("/correo", recuperarusuario); //correo hay que cambiar
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad",politicas);
rutaUsuario.get("/detalles", detalles);
rutaUsuario.get("/historialc", historialcambios);
rutaUsuario.get("/eliminacionCuenta",eliminacionCuenta);
rutaUsuario.get("/perfil",perfil);
rutaUsuario.get("/inicio-autentificaion-dos-pasos",inicioAutentificacionDosPasos);
rutaUsuario.get("/elegir-autentificaion-dos-pasos",elegirAutentificacionDosPasos);
rutaUsuario.get("/listabn", listaBN);
// rutaUsuario.get("/dispositivos", dispositivosMovil); // ???? Ni idea de qué es esto
rutaUsuario.get("/historiala", historialacceso); // Admin
rutaUsuario.get("/exportar-datos", exportardatos);
rutaUsuario.get("/sesiones-desktop", sesionesActivasDesktop);
// rutaUsuario.get("/dispositivos", dispositivosMovil); // ????


// Ruta usuario
rutaUsuario.get("/panelUsuario", panelUsuario);

export default rutaUsuario

