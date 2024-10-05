const id = sessionStorage.getItem("userId");
const url = localStorage.getItem("url");

async function getRequest(id) {
    try {
        const request = await fetch(url + "/solicitudes/" + id);
        const response = await request.json();
        return response;
    } catch (err) {
        console.error(err);
    }
}

async function createRequest(id_usuario, id_tipo) {
    try {
        const response = await fetch(url + "/solicitudes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_usuario,
                id_tipo
            })
        });
        const result = await response.json();
        if (response.ok) {
            alert("Solicitud creada con éxito");
            const requests = await getRequest(id_usuario);
            renderRequests(requests);
        } else {
            alert("Error al crear la solicitud: " + result.message);
        }
    } catch (err) {
        console.error("Error:", err);
    }
}

function renderRequests(requests) {
    const tableBody = document.getElementById("requestTableBody");
    tableBody.innerHTML = "";
    if (requests.body.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="2" class="text-center">No hay solicitudes.</td></tr>';
        return;
    }
    requests.body.forEach(request => {
        const row = document.createElement("tr");
        const typeCell = document.createElement("td");
        typeCell.textContent = request.tipo.trim();
        const statusCell = document.createElement("td");
        const statusBadge = document.createElement("span");
        statusBadge.classList.add("badge");
        if (request.estado === "Pendiente") {
            statusBadge.classList.add("bg-warning");
            statusBadge.textContent = "Pending";
        } else if (request.estado === "Aceptado") {
            statusBadge.classList.add("bg-success");
            statusBadge.textContent = "Aceptado";
        } else if (request.estado === "Rechazado") {
            statusBadge.classList.add("bg-danger");
            statusBadge.textContent = "Rechazado";
        }
        statusCell.appendChild(statusBadge);
        row.appendChild(typeCell);
        row.appendChild(statusCell);
        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const requests = await getRequest(id);
    renderRequests(requests);
    document.querySelector("#eliminationModal .btn-danger").addEventListener("click", () => {
        createRequest(id, 1);
    });
    document.querySelector("#exportationModal .btn-primary").addEventListener("click", () => {
        createRequest(id, 2);
    });
});
