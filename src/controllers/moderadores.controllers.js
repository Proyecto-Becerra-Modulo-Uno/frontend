import { config } from "dotenv";
config();
const url = process.env.BACKEND_URL;

export const inicioModerador = (req, res) => {
    res.render("views.moderador.ejs")
}