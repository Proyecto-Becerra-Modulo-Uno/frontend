import { Router } from "express";
import { inicioModerador } from "../controllers/moderadores.controllers.js";

const rutaModerador = Router();


rutaModerador.get("/moderador", inicioModerador);

export default rutaModerador;