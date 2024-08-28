import express from "express";
import { config } from "dotenv";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import ruta from "./routes/index.js";
<<<<<<< HEAD
import rutaPanel from "./routes/routes.panel.js";
import rutaRecuperarClave from "./routes/routes.recuperarClave.js";
=======
>>>>>>> 51eb4038dd29904ce27ce60601635325086b2fe8
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT || 3000);

<<<<<<< HEAD
app.use("/", rutaPanel);
app.use("/", rutaRecuperarClave);
app.use("/", ruta);

// app.use("/", (req, res) => {
//     res.render("views.error.ejs");
// });
=======
app.use("/", ruta);

app.use("/", (req, res) => {
    res.render("views.error.ejs");
});
>>>>>>> 51eb4038dd29904ce27ce60601635325086b2fe8

export default app;
