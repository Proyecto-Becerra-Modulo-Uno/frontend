import { config } from "dotenv";
import fetch from 'node-fetch';

config();

const url = process.env.BACKEND_URL;
const ITEMS_PER_PAGE = 10;

const listarUsuarios = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const response = await fetch(`${url}/users`);
        const data = await response.json();

        if (!response.ok) throw new Error('Error al obtener usuarios');

        const usuarios = data.body;
        const totalPages = Math.ceil(usuarios.length / ITEMS_PER_PAGE);
        const paginatedUsers = usuarios.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

        res.render("views.usuario.listar.ejs", {
            usuarios: paginatedUsers,
            currentPage: page,
            totalPages
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).render("views.error.ejs", { error: "Error al cargar usuarios" });
    }
};

const cambiarRolUsuario = async (req, res) => {
    console.log("Request body:", req.body);
    const { usuarioId, rolId } = req.body;

    if (!usuarioId || rolId === undefined) {
        return res.status(400).json({ error: true, message: "Se requieren usuarioId y rolId" });
    }

    try {
        const response = await fetch(`${url}/users/asignar-rol`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuarioId: parseInt(usuarioId, 10), rolId: parseInt(rolId, 10) }),
        });

        const data = await response.json();
        if (response.ok) {
            res.json({ error: false, message: "Rol actualizado correctamente", data });
        } else {
            res.status(response.status).json({ error: true, message: data.message || "Error al actualizar el rol" });
        }
    } catch (err) {
        console.error('Error al cambiar rol:', err);
        res.status(500).json({ error: true, message: "Error interno del servidor" });
    }
};

export { listarUsuarios, cambiarRolUsuario };
