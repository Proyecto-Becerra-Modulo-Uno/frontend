import { config } from "dotenv";
import fetch from "node-fetch";
import path from 'path';

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

export const nuevousuario = (req, res) => {
    res.render("views.nuevousuario.ejs")
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


export const registroIngreso = (req, res) => {
    res.render("views.registro.ingreso.ejs")
}

export const complejidadPreguntas = (req, res) => {
    res.render("views.complejidad.preguntas.ejs")
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
    fetch(url + "/bloqueos")
    .then(res => res.json())
    .then(data => {
        datos = data
        res.render("views.cuentas.bloqueadas.ejs", {users: data, url: url})
    })
} 

export const historialacceso = (req, res) => {
    res.render("views.historialAcceso.ejs")
}

export const retencion = (req, res) => {
    res.render("views.retencion.datos.ejs")
}


export const grupos = (req, res) => {
    fetch(url + "/listar-grupos")
    .then(res => res.json())
    .then(data => res.render("views.grupos.ejs", {grupos: data}))
} 

export const informeActividad = (req, res) => {
    res.render("views.informe.actividad.ejs")
}



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
    .then(res=>res.json())
    .then(data=>{
        datos = data.body;
        res.render("view.ssl.ejs", {datos:datos});
    })
}

