//Archivo para montar carpeta en Git hub
export const panel = (req, res) => {
    res.render("views.panel.ejs")
}

export const condicionesc = (req, res) => {
    res.render("views.condicionesc.ejs")
}

export const dispositivos = (req, res) => {
    res.render("views.dispositivos.ejs")
}

export const notipopup = (req, res) => {
    res.render("views.popup.ejs")
}