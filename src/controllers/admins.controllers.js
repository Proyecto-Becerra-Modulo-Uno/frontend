const url = "http://localhost:3000";
export const panel = (req, res) => {
    let datos = {};
    fetch(url + "/users")
    .then(res => res.json())
    .then(data => {
        datos = data
        res.render("views.panel.ejs", {users: data, url: url})
    })
}

export const registro = (req, res) => {
    res.render("views.registro.ejs")
}

export const verRegistro = (req, res) => {
    res.render("views.verRegistro.ejs")
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

export const registroIngreso = (req, res) => {
    res.render("views.registro.ingreso.ejs")
}

export const config = (req, res) => {
    res.render("views.configuracion.ejs")
}

export const registroSesion = (req, res) => {
    fetch(url + "/users/inicios")
    .then(res => res.json())
    .then(data => {
        res.render("views.registroSesión.ejs", {registros: data})
    })
    .catch(err => console.error(err))
}

export const cuentasbloqueadas = (req, res) => {
    res.render("views.cuentas.bloqueadas.ejs")
}