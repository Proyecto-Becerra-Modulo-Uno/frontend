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
<<<<<<< HEAD
    res.render("views.recuperar.user.ejs")
}
=======
  res.render("views.recucorreo.ejs");
};
>>>>>>> e1e45b9d99b4e1823eec6dc841131a3c1b5f9a6e

export const ingresarcodigo = (req, res) => {
  res.render("views.codigo.ejs");
};

export const politicas = (req, res) => {
    res.render("views.privacidad.ejs")
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