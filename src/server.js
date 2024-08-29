import express from "express";
import { config } from "dotenv";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import ruta from "./routes/index.js";
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT || 3000);

app.use("/", ruta);

// app.use("/", (req, res) => {
//     res.render("views.error.ejs");
// });

export default app;
