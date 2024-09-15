import { config } from "dotenv";
config();
const url = process.env.BACKEND_URL;

export const preguntasSeguridad = (req, res) => {
    res.render("view.preguntas.ejs")
}

export const configuracionPoliticas = (req, res) => {
    res.render("view.politicas.movil.ejs")
}

export const exportdata = (req, res) => {
    res.render("view.exportdb.ejs");
}

export const ssl = (req, res) => {
    let datos = "";
    const recurso = url + "/certificates";
    fetch(recurso)
    .then(res=>res.json())
    .then(data=>{
        datos = data.body;
        res.render("view.ssl.ejs", {datos:datos});
    })
}