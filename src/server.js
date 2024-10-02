import express from "express";
import { config } from "dotenv";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import ruta from "./routes/index.js";
import rutaAdmin from "./routes/routes.admin.js";
import cors from "cors";

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = express();
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
server.use(express.json());

server.use(cors())

server.set("port", process.env.PORT || 3000);

server.use("/", ruta);

server.use("/", (req, res) => {
    res.render("views.error.ejs");
});

export default server;
