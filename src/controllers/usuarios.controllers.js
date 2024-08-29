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
  res.render("views.privacidad.ejs");
};
