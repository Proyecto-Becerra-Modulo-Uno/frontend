//Archivo para montar carpeta en Git hub
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