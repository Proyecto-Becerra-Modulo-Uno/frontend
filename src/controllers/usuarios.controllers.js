export const preguntas = (req, res) => {
  res.render("views.preguntas.seguridad.ejs");
};

export const recuperarClave = (req, res) => {
  res.render("views.recuperarClave.ejs");
};

export const comLogs = (req, res) => {
  res.render("views.comlogs.ejs");
};


export const codigoRecuperacion = (req, res) => {
  res.render("views.codigoRecuperacion.ejs");
};

export const nuevaClave = (req, res) => {
  res.render("views.nuevaClave.ejs");
};

export const cambiarcontrasena = (req, res) => {
  res.render("views.contrasena.ejs");
};

export const recuperarusuario = (req, res) => {
  res.render("views.recucorreo.ejs");
};

export const ingresarcodigo = (req, res) => {
  res.render("views.codigo.ejs");
};

export const politicas = (req, res) => {
  res.render("views.privacidad.ejs")
}

export const detalles = (req, res) => {
  res.render("views.detalles.ejs")
}

export const historialcambios = (req, res) => {
  res.render("views.historialCambios.ejs")
}

export const eliminacionCuenta = (req, res) => {
  res.render("views.eliminacionCuenta.ejs")
}

export const nuevousuario = (req, res) => {
  res.render("views.nuevousuario.ejs")
}

export const perfil = (req, res) => {
  res.render("views.perfil.ejs")
};

export const inicioAutentificacionDosPasos = (req, res) => {
  res.render("views.inicio.autentificacion.dos.pasos.ejs");
};

export const elegirAutentificacionDosPasos = (req, res) => {
  res.render("views.elegir.autentificacion.dos.pasos.ejs");
};

export const dispositivosMovil = (req, res) => {
  res.render("views.dispositivos.movil.ejs")
}

export const exportardatos = (req, res) => {
  res.render("views.exportar.datos.ejs");
}

import { config } from "dotenv";
config();
const url = process.env.BACKEND_URL;

export const sesionesActivasDesktop = (req, res) => {
  fetch(url + "/users/sesiones-activas")
    .then(res => res.json())
    .then(data => {
      // Pasamos directamente 'data' a la plantilla
      res.render("views.sesiones.activas.ejs", { datos: data })
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      res.status(500).send("Error interno del servidor");
    });
}

