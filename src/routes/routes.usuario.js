import { Router } from "express";

import { cambiarcontrasena, codigoRecuperacion, comLogs, elegirAutentificacionDosPasos, ingresarcodigo, inicioAutentificacionDosPasos, listaBN, nuevaClave, nuevousuario, perfil, politicas, preguntas, recuperarClave, recuperarusuario, usuariosInactivos} from "../controllers/usuarios.controllers.js";

import { detalles,  eliminacionCuenta, exportardatos, historialcambios, sesionesActivasDesktop } from "../controllers/usuarios.controllers.js";


const rutaUsuario = Router();

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/recuperarClave", recuperarClave);
rutaUsuario.get("/codigoRecuperacion", codigoRecuperacion);
rutaUsuario.get("/nuevousuario", nuevousuario)
rutaUsuario.get("/nuevaClave", nuevaClave);
rutaUsuario.get("/contrasena", cambiarcontrasena);

rutaUsuario.get("/recuperar", recuperarusuario);
rutaUsuario.get("/comlogs", comLogs);
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad",politicas);
rutaUsuario.get("/detalles", detalles);
rutaUsuario.get("/historialc", historialcambios);
rutaUsuario.get("/eliminacionCuenta",eliminacionCuenta);
rutaUsuario.get("/perfil",perfil);
rutaUsuario.get("/inicio-autentificaion-dos-pasos",inicioAutentificacionDosPasos);
rutaUsuario.get("/elegir-autentificaion-dos-pasos",elegirAutentificacionDosPasos);
rutaUsuario.get("/listabn", listaBN);
// rutaUsuario.get("/dispositivos", dispositivosMovil); 
rutaUsuario.get("/exportar-datos", exportardatos);
rutaUsuario.get("/sesiones-desktop", sesionesActivasDesktop);
rutaUsuario.get("/usuarios-inactivos", usuariosInactivos);


export default rutaUsuario

