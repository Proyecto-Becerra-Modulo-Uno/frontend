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

        // Asignar el estado visual
        if (request.estado === "Pendiente") {
            statusBadge.classList.add("bg-warning");
            statusBadge.textContent = "Pendiente";
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

        // Condición para añadir el botón de descarga si es exportación aceptada
        if (request.id_tipo === 2 && request.id_estado === 2) {
            const downloadCell = document.createElement("td");
            const downloadBtn = document.createElement("button");
            downloadBtn.classList.add("btn", "btn-info", "btn-sm");
            downloadBtn.textContent = "Descargar PDF";

            // Agregar evento para mandar la solicitud al endpoint y generar PDF
            downloadBtn.addEventListener("click", () => {
                downloadUserData(request.id_usuario); // Solicitar los datos del usuario y generar el PDF
            });
            downloadCell.appendChild(downloadBtn);
            row.appendChild(downloadCell);
        }

        tableBody.appendChild(row);
    });
}

async function downloadUserData(id_usuario) {
    const url = localStorage.getItem('url');

    try {
        const response = await fetch(`${url}/solicitudes/datos/${id_usuario}`);
        const result = await response.json();

        if (!result.error && result.body.length > 0) {
            generatePDF(result.body);
        } else {
            console.error('Error al obtener los datos:', result.message);
        }
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
    }
}

function generatePDF(userData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const addTextWithPageBreak = (text, x, y, fontSize = 12) => {
        doc.setFontSize(fontSize);
        const textLines = doc.splitTextToSize(text, 190);
        textLines.forEach((line, index) => {
            if (y + 10 > 297) {
                doc.addPage();
                y = 10;
            }
            doc.text(line, x, y);
            y += 10;
        });
        return y;
    };

    const userInfo = userData[0][0];
    if (userInfo) {
        doc.setFontSize(16);
        doc.text("Datos del Usuario:", 10, 10);

        let yPos = 20; 
        yPos = addTextWithPageBreak(`Nombre: ${userInfo.nombre || 'N/A'} ${userInfo.apellido || ''}`, 10, yPos);
        yPos = addTextWithPageBreak(`Identificación: ${userInfo.identificacion || 'N/A'}`, 10, yPos);
        yPos = addTextWithPageBreak(`Tipo de Documento: ${userInfo.tipo_documento || 'N/A'}`, 10, yPos);
        yPos = addTextWithPageBreak(`Email: ${userInfo.email || 'N/A'}`, 10, yPos);
        yPos = addTextWithPageBreak(`Teléfono: ${userInfo.telefono || 'N/A'}`, 10, yPos);
        if (userInfo.direccion) yPos = addTextWithPageBreak(`Dirección: ${userInfo.direccion}`, 10, yPos);
        if (userInfo.fecha_nacimiento) yPos = addTextWithPageBreak(`Fecha de Nacimiento: ${userInfo.fecha_nacimiento}`, 10, yPos);
    }
    const userGroups = userData[1];
    let yPos = 90;
    if (userGroups.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Grupos:", 10, yPos);
        
        userGroups.forEach((group, index) => {
            yPos = addTextWithPageBreak(`Grupo ${index + 1}: ${group.nombre_grupo || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No pertenece a ningún grupo.", 10, yPos);
    }

    const userRequests = userData[2];
    if (userRequests.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Solicitudes:", 10, yPos);

        userRequests.forEach((request, index) => {
            yPos = addTextWithPageBreak(`Solicitud ${index + 1}:`, 10, yPos);
            yPos = addTextWithPageBreak(`Tipo: ${request.tipo.trim()}`, 10, yPos);
            yPos = addTextWithPageBreak(`Estado: ${request.id_estado === 1 ? "Pendiente" : "Aceptado"}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay solicitudes registradas.", 10, yPos);
    }

    const securityResponses = userData[3];

    if (securityResponses.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Respuestas a Preguntas de Seguridad:", 10, yPos);

        securityResponses.forEach((response, index) => {
            yPos = addTextWithPageBreak(`Pregunta ${index + 1}: ${response.pregunta || 'N/A'}`, 10, yPos);
            yPos = addTextWithPageBreak(`Respuesta: ${response.respuesta || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay respuestas a preguntas de seguridad.", 10, yPos);
    }

    const userPermissions = userData[4];
    if (userPermissions.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Permisos:", 10, yPos);

        userPermissions.forEach((permission, index) => {
            yPos = addTextWithPageBreak(`Permiso ${index + 1}: ${permission.nombre_permiso || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No tiene permisos asignados.", 10, yPos);
    }

    // Log de seguridad
    const securityLogs = userData[5];
    if (securityLogs.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Registros de Seguridad:", 10, yPos);

        securityLogs.forEach((log, index) => {
            yPos = addTextWithPageBreak(`Registro ${index + 1}: ${log.descripcion || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay registros de seguridad.", 10, yPos);
    }

    // Lista blanca
    const whitelist = userData[6];
    if (whitelist.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Lista Blanca:", 10, yPos);

        whitelist.forEach((item, index) => {
            yPos = addTextWithPageBreak(`Elemento ${index + 1}: ${item.elemento || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay elementos en la lista blanca.", 10, yPos);
    }

    // Lista negra
    const blacklist = userData[7];
    if (blacklist.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Lista Negra:", 10, yPos);

        blacklist.forEach((item, index) => {
            yPos = addTextWithPageBreak(`Elemento ${index + 1}: ${item.elemento || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay elementos en la lista negra.", 10, yPos);
    }

    // Intentos fallidos
    const failedAttempts = userData[8];
    if (failedAttempts.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Intentos Fallidos:", 10, yPos);

        failedAttempts.forEach((attempt, index) => {
            yPos = addTextWithPageBreak(`Intento ${index + 1}: Fecha ${attempt.fecha || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay intentos fallidos registrados.", 10, yPos);
    }

    // Historial de sesión
    const sessionHistory = userData[9];
    if (sessionHistory.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Historial de Sesión:", 10, yPos);

        sessionHistory.forEach((session, index) => {
            const fechaInicio = session.fecha_inicio_sesion ? new Date(session.fecha_inicio_sesion).toLocaleString() : 'N/A';
            const direccionIP = session.direccion_ip || 'N/A';
            const dispositivo = session.dispositivo || 'N/A';
            yPos = addTextWithPageBreak(`Sesión ${index + 1}:`, 10, yPos);
            yPos = addTextWithPageBreak(`Fecha: ${fechaInicio}`, 10, yPos);
            yPos = addTextWithPageBreak(`Dirección IP: ${direccionIP}`, 10, yPos);
            yPos = addTextWithPageBreak(`Dispositivo: ${dispositivo}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay historial de sesión registrado.", 10, yPos);
    }
    const passwordChangeHistory = userData[10];
    if (passwordChangeHistory.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Historial de Cambio de Contraseña:", 10, yPos);

        passwordChangeHistory.forEach((change, index) => {
            yPos = addTextWithPageBreak(`Cambio ${index + 1}: Fecha ${change.fecha || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay historial de cambios de contraseña registrado.", 10, yPos);
    }

    const diversityInclusion = userData[11];
    if (diversityInclusion.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Diversidad e Inclusión:", 10, yPos);

        diversityInclusion.forEach((item, index) => {
            yPos = addTextWithPageBreak(`Elemento ${index + 1}: ${item.descripcion || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay registros de diversidad e inclusión.", 10, yPos);
    }

    const userActivity = userData[12];
    if (userActivity.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Actividad del Usuario:", 10, yPos);

        userActivity.forEach((activity, index) => {
            yPos = addTextWithPageBreak(`Actividad ${index + 1}: ${activity.descripcion || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay actividad registrada para el usuario.", 10, yPos);
    }

    const suspiciousActivities = userData[13];
    if (suspiciousActivities.length > 0) {
        doc.setFontSize(16);
        yPos = addTextWithPageBreak("Actividades Sospechosas:", 10, yPos);

        suspiciousActivities.forEach((activity, index) => {
            yPos = addTextWithPageBreak(`Actividad ${index + 1}: ${activity.descripcion || 'N/A'}`, 10, yPos);
        });
    } else {
        yPos = addTextWithPageBreak("No hay actividades sospechosas registradas.", 10, yPos);
    }

    doc.save(`datos_usuario_${userInfo.id}.pdf`);
}
document.addEventListener("DOMContentLoaded", async () => {
    const requests = await getRequest(id);
    console.log(requests);
    
    renderRequests(requests);
    document.querySelector("#eliminationModal .btn-danger").addEventListener("click", () => {
        createRequest(id, 1);
    });
    document.querySelector("#exportationModal .btn-primary").addEventListener("click", () => {
        createRequest(id, 2);
    });
});
