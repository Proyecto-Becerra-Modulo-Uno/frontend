import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;
export const panel = (req, res) => {
    let datos = {};
    fetch(url + "/users")
    .then(res => res.json())
    .then(data => {
        datos = data
        res.render("views.panel.ejs", {users: data, url: url})
    })
}

export const notipopup = (req, res) => {
    res.render("views.popup.ejs")
}

export const registro = (req, res) => {
    res.render("views.registro.ejs")
}

export const condicionesc = (req, res) => {
    fetch(url + "/users/listar-politicas")
    .then(res => res.json())
    .then(data => {
        res.render("views.condicionesc.ejs", {politicas: data})
    })
}

export const verificacionDoble1 = (req, res) => {
    res.render("views.verificacionDoble1.ejs")
}

export const verificacionDoble2 = (req, res) => {
    res.render("views.verificacionDoble2.ejs")
}

export const configuracion = (req, res) => {
    fetch(url + "/users/listar-politicas")
    .then(res => res.json())
    .then(data => {
        res.render("views.configuracion.ejs", {configuracion: data})
    })
    .catch(err => console.error(err))
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
    let datos = {};
    fetch(url + "/users")
    .then(res => res.json())
    .then(data => {
        datos = data
        res.render("views.cuentas.bloqueadas.ejs", {users: data, url: url})
    })
}
export const grupos = (req, res) => {
    res.render("views.grupos.ejs");
}