import { config } from "dotenv";
import fetch from "node-fetch";
import path from 'path';
config();
const url = process.env.BACKEND_URL;

export const listarBackups = (req, res) => {
  const backups = [
    { name: 'backup1.sql', date: '2023-09-10' },
    { name: 'backup2.sql', date: '2023-09-11' }
  ]; // Simulate backups. Replace this with actual logic to fetch backups.

  res.render('view.datosusuario.ejs', { backups });
};

export const crearBackup = (req, res) => {
  fetch(url + "/user-backup", { method: "POST" })
    .then(response => response.json())
    .then(data => {
      console.log("Backup created:", data);
      res.redirect('/backups');
    })
    .catch(err => {
      console.error("Error creating backup:", err);
      res.status(500).send("Error creating backup");
    });
};

export const restaurarBackup = (req, res) => {
  const { backupFilePath } = req.body;

  fetch(url + "/restore-users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ backupFilePath })
  })
    .then(response => response.json())
    .then(data => {
      console.log("Restoration completed:", data);
      res.redirect('/user-backups');
    })
    .catch(err => {
      console.error("Error restoring data:", err);
      res.status(500).send("Error restoring data");
    });
};


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
    .then(res => res.json())
    .then(data => {
      datos = data.body;
      res.render("view.ssl.ejs", { datos: datos });
    })
}

export const historial = (req, res) => {
  const recurso = url + "/historial_todo";
  fetch(recurso)
    .then(res => res.json())
    .then(data => {
      // Asegúrate de que data.body tenga la estructura esperada
      if (data && data.data) {
        res.render("view.historial.ejs", { datos: data.data });
      } else {
        res.render("view.historial.ejs", { datos: [] });
      }
    })
    .catch(err => {
      console.error(err);
      res.render("view.historial.ejs", { datos: [] });
    });
};
