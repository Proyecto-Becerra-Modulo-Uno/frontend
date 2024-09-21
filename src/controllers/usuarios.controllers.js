import { config } from "dotenv";
config();
const url = process.env.BACKEND_URL;

export const preguntas = (req, res) => {
  res.render("views.preguntas.seguridad.ejs");
};

export const recuperarClave = (req, res) => {
  res.render("views.recuperarClave.ejs");
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
    res.render("views.recuperar.user.ejs")
}

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

export const listaBN = (req, res) => {
  res.render("views.lista.ejs")
}

export const notiActi = (req, res) => {
  const recurso = url + "/users/actividades-sospechosas";
  fetch(recurso)
    .then(res => res.json())
    .then(data => {
      let datos = Array.isArray(data.body) ? data.body : [data.body];
      console.log('Datos a renderizar:', datos); // Agregar este log para depuración
      res.render("views.notiact.ejs", { datos: datos });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      res.render("views.notiact.ejs", { datos: [] }); // Pasar un array vacío en caso de error
    });
};

export const exportardatos = (req, res) => {
  res.render("views.exportar.datos.ejs");
}

export const sesionesActivasDesktop = (req, res) => {
    res.render("views.sesiones.activas.ejs")
}

export const historialacceso = (req, res) => {
  res.render("views.historialAcceso.ejs");
};


export const vistaprincipalusuario = (req, res)=>{
  res.render("view.vistaprincipalusuario.ejs")
}
// Ruta usuario
export const panelUsuario = (req, res) => {
  res.render("views.panel.usuario.ejs");
};
