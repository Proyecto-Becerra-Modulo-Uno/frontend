const url = "http://localhost:3000"; 
localStorage.setItem("url", url);

const token = sessionStorage.getItem("token");
const userId = sessionStorage.getItem("userId");

if (!token || !url) {
    window.location.href = "/"; 
}

// Opciones para las solicitudes fetch
const options = {
    method: "GET", 
    headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
    },
};

// Función para obtener información del usuario por ID
// Función para obtener información del usuario por ID
const fetchUserInfo = async () => {
    try {
        const response = await fetch(`${url}/users/${userId}`, options);
        if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
        }
        const userData = await response.json();
        const userInfo = userData.body[0];

        // Por ejemplo, podrías mostrar la información en la tabla
        // Esto depende de dónde quieres mostrarla, aquí te muestro un ejemplo básico
        document.querySelector("#user-data").innerHTML = `
            <p>Nombre: ${userInfo.nombre_usuario}</p>
            <p>Email: ${userInfo.email}</p>
            <p>Rol: ${userInfo.rol}</p>
        `;

        const titles = document.getElementsByTagName("title");

        if (titles.length > 0) {
            titles[0].textContent = `Dashboard | ${userInfo.nombre_usuario}`;
        }

    } catch (error) {
        console.error(error);
        alert("Error al obtener la información del usuario");
    }
};

// Llamar a la función para obtener información del usuario
fetchUserInfo();

// Asignar Rol a Usuario
document.querySelectorAll(".form-select").forEach((selector) => {
    selector.addEventListener("change", (e) => {
        const row = e.target.closest(".table-active");
        const option = e.target.value;
        const id = row.querySelector(".id_usuario").textContent.trim();
        const url = localStorage.getItem("url");

        fetch(url + "/admin/asignar-rol", {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-access-token": token }, // Incluyendo el token
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
document.querySelectorAll(".btn-lock").forEach((button) => {
    button.addEventListener("click", async function () {
        const row = this.closest("tr");
        const id = row.querySelector(".id_usuario").textContent.trim();
        const locked = this.getAttribute("data-locked") === "true";

        try {
            const response = await fetch(`${localStorage.getItem("url")}/admin/estado/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token // Asegúrate de que el token esté disponible
                },
                body: JSON.stringify({ estado: locked ? 0 : 1 })
            });

            if (!response.ok) {
                throw new Error("Error al actualizar el estado del usuario");
            }

            this.setAttribute("data-locked", !locked);
            const icon = this.querySelector("i");

            if (locked) {
                icon.classList.remove("fa-lock-open");
                icon.classList.add("fa-lock");
                this.setAttribute("title", "Bloquear usuario");
            } else {
                icon.classList.remove("fa-lock");
                icon.classList.add("fa-lock-open");
                this.setAttribute("title", "Desbloquear usuario");
            }
        } catch (err) {
            console.error(err);
        }
    });
});

// Bloquear Usuario
document.querySelectorAll(".btn-lock").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const row = e.target.closest(".table-active");
        const id = row.querySelector(".id_usuario").textContent.trim();
        const url = localStorage.getItem("url");

        fetch(url + `/admin/estado/${id}`, {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json", 
                "x-access-token": token // Incluyendo el token
            },
            body: JSON.stringify({ estado: 3 }),
        })
            .then((response) => response.json())
            .then((data) => {
                location.reload();
            })
            .catch((err) => console.error(err));
    });
});
