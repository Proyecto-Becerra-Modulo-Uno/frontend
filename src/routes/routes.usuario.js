import { Router } from "express";

import { recuperarusuario, recuperarClave, nuevaClave, codigoRecuperacion, cambiarcontrasena, perfil, elegirAutentificacionDosPasos, ingresarcodigo, inicioAutentificacionDosPasos, listaBN, nuevousuario, politicas, preguntas, inicioUsuario} from "../controllers/usuarios.controllers.js";

import { detalles,  eliminacionCuenta, exportardatos, historialcambios, sesionesActivasDesktop } from "../controllers/usuarios.controllers.js";
import { historialacceso } from "../controllers/admins.controllers.js";


const rutaUsuario = Router();

//rutas organizadas
rutaUsuario.get("/recuperar-usuario", recuperarusuario);
rutaUsuario.get("/recuperar-clave", recuperarClave);
rutaUsuario.get("/nueva-clave", nuevaClave);
rutaUsuario.get("/codigo-recuperacion", codigoRecuperacion);
rutaUsuario.get("/perfil", perfil);


//rutas desorganizadas

rutaUsuario.get("/preguntas", preguntas);
rutaUsuario.get("/nuevousuario", nuevousuario)
rutaUsuario.get("/contrasena", cambiarcontrasena);
rutaUsuario.get("/codigo", ingresarcodigo);
rutaUsuario.get("/privacidad",politicas);
rutaUsuario.get("/detalles", detalles);
rutaUsuario.get("/historialc", historialcambios);
rutaUsuario.get("/eliminacionCuenta",eliminacionCuenta);
rutaUsuario.get("/inicio-autentificaion-dos-pasos",inicioAutentificacionDosPasos);
rutaUsuario.get("/elegir-autentificaion-dos-pasos",elegirAutentificacionDosPasos);
rutaUsuario.get("/listabn", listaBN);
rutaUsuario.get("/historiala", historialacceso); // Admin
rutaUsuario.get("/exportar-datos", exportardatos);
rutaUsuario.get("/sesiones-desktop", sesionesActivasDesktop);
rutaUsuario.get("/usuario", inicioUsuario)


export default rutaUsuario

