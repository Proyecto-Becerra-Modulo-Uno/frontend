// Asegúrate de que jwt-decode está disponible
// Si lo has instalado con npm, importa la biblioteca
// import jwt_decode from 'jwt-decode'; // Solo si usas módulos ES6

import { jwtDecode } from "jwt-decode";

const url = document.querySelector(".id").value;
localStorage.setItem("url", url);

const token = sessionStorage.getItem("token");

if (!token) {
  window.location.href = "/";
}

if (!url) {
  window.location.href = "/";
}

// Decodificar el token para obtener la información del usuario
const decodedToken = jwtDecode(token);
console.log(decodedToken); // Verifica qué información contiene el token

const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-access-token": token,
  },
};
  
// Asignar Rol a Usuario
const selects = document.querySelectorAll(".form-select").forEach((selector) => {
  selector.addEventListener("change", (e) => {
    const row = e.target.closest(".table-active");
    const option = e.target.value;
    const id = row.querySelector(".id_usuario").textContent.trim();
    const url = localStorage.getItem("url");

    fetch(url + "/users/asignar-rol", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuarioId: id,
        rolId: option,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  });
});

// Inicializar tooltips y manejar bloqueo/desbloqueo
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Lógica de bloqueo/desbloqueo
  document.querySelectorAll(".btn-lock").forEach((button) => {
    button.addEventListener("click", function () {
      const locked = this.getAttribute("data-locked") === "true";
      const icon = this.querySelector("i");

      if (!locked) {
        // Cambiar a bloqueado
        this.setAttribute("data-locked", "true");
        icon.classList.remove("fa-lock");
        icon.classList.add("fa-lock-open");
        this.setAttribute("title", "Desbloquear usuario"); // Cambia el tooltip
      } else {
        // Cambiar a desbloqueado
        this.setAttribute("data-locked", "false");
        icon.classList.remove("fa-lock-open");
        icon.classList.add("fa-lock");
        this.setAttribute("title", "Bloquear usuario"); // Cambia el tooltip
      }

      // Actualizar tooltip después del cambio
      bootstrap.Tooltip.getInstance(this).setContent({
        ".tooltip-inner": this.getAttribute("title"),
      });
    });
  });
});

// Bloquear Usuario
const btnLock = document.querySelectorAll(".btn-lock").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const row = e.target.closest(".table-active");
    const id = row.querySelector(".id_usuario").textContent.trim();
    const url = localStorage.getItem("url");

    fetch(url + `/admin/estado/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        estado: 3,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        location.reload();
      })
      .catch((err) => console.error(err));
  });
});
