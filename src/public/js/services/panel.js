
const url = "http://localhost:3000"; 
localStorage.setItem("url", url);

const token = sessionStorage.getItem("token");
const userId = sessionStorage.getItem("userId");

if (!token || !url) {
    window.location.href = "/"; 
}

const options = {
    method: "GET", 
    headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
    },
};

// Obtener información del usuario y todos los usuarios
const getUserData = async () => {
    try {
        const userResponse = await fetch(`${localStorage.getItem("url")}/users/${userId}`, options);
        const allUsersResponse = await fetch(`${localStorage.getItem("url")}/users`, options);

        if (!userResponse.ok || !allUsersResponse.ok) {
            throw new Error("Error en la respuesta del servidor");
        }

        const userData = await userResponse.json();
        const allUsersData = await allUsersResponse.json();


        if (Array.isArray(allUsersData.body) && allUsersData.body.length > 0) {
            renderUserData(userData.body[0], allUsersData.body);
        } else {
            console.error("No se encontraron usuarios en la respuesta");
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario o de todos los usuarios:', error);
    }
};

// Función para renderizar los datos del usuario en la interfaz
const renderUserData = (userInfo, allUsersData) => {
    document.getElementById("user-name").innerText = `Nombre: ${userInfo.Nombre}`;
    document.getElementById("user-email").innerText = `Email: ${userInfo.Correo}`;

    const usersTable = document.getElementById("all-users-table").getElementsByTagName('tbody')[0];
    usersTable.innerHTML = ''; 
    allUsersData.forEach(user => {
        const row = usersTable.insertRow();
        row.innerHTML = `
            <td class="id_usuario">${user.ID}</td>
            <td>${user.Nombre}</td>
            <td>${user.Correo}</td>
            <td>
                <button class="btn btn-lock" data-locked="${user.locked}" title="${user.locked ? 'Desbloquear usuario' : 'Bloquear usuario'}">
                    <i class="fa ${user.locked ? 'fa-lock' : 'fa-lock-open'}"></i>
                </button>
            </td>
        `;
    });


    assignLockButtons();
};


const assignLockButtons = () => {
    document.querySelectorAll(".btn-lock").forEach((btn) => {
        btn.addEventListener("click", async function () {
            const row = this.closest("tr");
            const id = row.querySelector(".id_usuario").textContent.trim();
            const locked = this.getAttribute("data-locked") === "true";

            try {
                const response = await fetch(`${localStorage.getItem("url")}/admin/estado/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json", "x-access-token": token },
                    body: JSON.stringify({ estado: locked ? 0 : 1 }),
                });

                if (!response.ok) {
                    throw new Error("Error al actualizar el estado del usuario");
                }

                // Actualizar la interfaz
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
};

// Llamar a la función para obtener los datos al cargar la página
document.addEventListener("DOMContentLoaded", getUserData);
