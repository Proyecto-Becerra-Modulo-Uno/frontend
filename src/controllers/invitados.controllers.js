import { config } from "dotenv";
config();
const url = process.env.BACKEND_URL;

export const inicioInvitado = (req, res) => {
    res.render("views.invitado.ejs")
}