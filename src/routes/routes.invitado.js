import { Router } from "express";
import { inicioInvitado } from "../controllers/invitados.controllers.js";

const rutaInvitado = Router();

rutaInvitado.get("/invitado", inicioInvitado);

export default rutaInvitado;