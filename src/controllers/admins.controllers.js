//Archivo para montar carpeta en Git hub
export const panel = (req, res) => {
    res.render("views.panel.ejs")
}

export const login = (req, res) => {
    res.render("views.login.ejs")
}

export const recuperarusuario = (req, res) => {
    res.render("views.recucorreo.ejs")
}

export const ingresarcodigo = (req, res) => {
    res.render("views.codigo.ejs")
}

export const nuevousuario = (req, res) => {
    res.render("views.nuevousuario.ejs")
}

export const condicionesc = (req, res) => {
    res.render("views.condicionesc.ejs")
}

export const verificacionDoble1 = (req, res) => {
    res.render("views.verificacionDoble1.ejs")
}

export const verificacionDoble2 = (req, res) => {
    res.render("views.verificacionDoble2.ejs")
}

export const politicas = (req, res) => {
    res.render("views.privacidad.ejs")
}
export const registro = (req, res) => {
    res.render("views.registro.ejs")
}