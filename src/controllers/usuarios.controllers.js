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
  res.render("views.recucorreo.ejs");
};

export const ingresarcodigo = (req, res) => {
  res.render("views.codigo.ejs");
};

export const politicas = (req, res) => {
    res.render("views.privacidad.ejs")
}

export const historialacceso = (req, res) => {
    res.render("views.historialAcceso.ejs")
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
    res.render("views.inicio.autentificacion.dos.pasos.ejs")
}

export const elegirAutentificacionDosPasos = (req, res) => {
    res.render("views.elegir.autentificacion.dos.pasos.ejs")
}

export const dispositivosMovil = (req, res) => {
    res.render("views.dispositivos.movil.ejs")
}