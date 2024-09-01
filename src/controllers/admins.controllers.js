export const panel = (req, res) => {
    let datos = {};
    const url = "http://localhost:3000";
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

export const cuentasbloqueadas = (req, res) => {
    res.render("views.cuentas.bloqueadas.ejs")
}