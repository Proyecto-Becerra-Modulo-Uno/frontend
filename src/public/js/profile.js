// js/profile.js

import { cambiarContrasena, eliminarCuenta, obtenerAccesos } from '../controllers/profileController.js';

// Obtener el ID del usuario (asegúrate de que el ID esté guardado en localStorage)
const userId = localStorage.getItem('userId');
const url = localStorage.getItem("url"); // Obtener la URL base

// Función para cambiar la contraseña
const handleChangePassword = async () => {
    const nuevaContrasena = document.querySelector(".nueva-contrasena").value;

    if (nuevaContrasena) {
        try {
            const mensaje = await cambiarContrasena(userId, nuevaContrasena);
            alert(mensaje);
        } catch (error) {
            alert('Error al cambiar la contraseña: ' + error);
        }
    } else {
        alert('Por favor, ingresa una nueva contraseña.');
    }
};

// Función para eliminar la cuenta
const handleDeleteAccount = async () => {
    if (confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.")) {
        try {
            const mensaje = await eliminarCuenta(userId);
            alert(mensaje);
            window.location.href = "/"; // Redirige a la página de inicio después de eliminar la cuenta
        } catch (error) {
            alert('Error al eliminar la cuenta: ' + error);
        }
    }
};

// Función para obtener accesos
const handleGetAccessHistory = async () => {
    try {
        const accesos = await obtenerAccesos(userId);
        const accesosList = document.querySelector(".accesos-lista");
        accesosList.innerHTML = ''; // Limpiar la lista actual

        accesos.forEach(acceso => {
            const li = document.createElement('li');
            li.textContent = `Fecha: ${acceso.fecha}, Acción: ${acceso.accion}`;
            accesosList.appendChild(li);
        });
    } catch (error) {
        alert('Error al obtener los accesos: ' + error);
    }
};

// Asignar eventos a los botones
document.querySelector(".btn-cambiar-contrasena").addEventListener("click", handleChangePassword);
document.querySelector(".btn-eliminar-cuenta").addEventListener("click", handleDeleteAccount);
document.querySelector(".btn-obtener-accesos").addEventListener("click", handleGetAccessHistory);

// Obtener accesos al cargar la página
document.addEventListener("DOMContentLoaded", handleGetAccessHistory);
