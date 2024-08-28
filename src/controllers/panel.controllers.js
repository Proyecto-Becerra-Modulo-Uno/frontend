//Archivo para montar carpeta en Git hub
export const panel = (req, res) => {
    res.render("views.panel.ejs")
}
export const politicas = (req, res) => {
    res.render("views.privacidad.ejs")
}
export const registro = (req, res) => {
    res.render("views.registro.ejs")
}