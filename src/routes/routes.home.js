import { Router } from "express";
import { login } from "../controllers/home.controllers.js";

const rutaHome = Router();

rutaHome.get("/", login)

export default rutaHome