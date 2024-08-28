import { Router } from "express";
import { login, panel } from "../controllers/panel.controllers.js";

const rutaPanel = Router();

rutaPanel.get("/", panel)
rutaPanel.get("/login", login)


export default rutaPanel