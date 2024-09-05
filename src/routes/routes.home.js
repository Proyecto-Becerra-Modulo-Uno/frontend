import { Router } from "express";
import { login, plantilla } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/", login)
rutaHome.get("/plantilla", plantilla)
export default rutaHome