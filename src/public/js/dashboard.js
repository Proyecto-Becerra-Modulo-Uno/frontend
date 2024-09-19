// Función para cargar datos y actualizar el panel
async function actualizarPanel() {
    actualizarActividadesSospechosas();
    actualizarEstadoCertificados();
    actualizarCertificadosPorEstado();
    actualizarAdministradoresActivos();
    actualizarAdministradoresPorEstado();
    actualizarPoliticasBloqueo();
}

function actualizarActividadesSospechosas() {
    // Usar los datos proporcionados por el servidor
    const data = window.actividades;
    
    const ctx = document.getElementById('actividadesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.dia),
            datasets: [{
                label: 'Actividades Sospechosas',
                data: data.map(item => item.total_actividades),
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function actualizarEstadoCertificados() {
    const data = window.estadoCertificados;

    const tbody = document.querySelector('#certificadosTable tbody');
    tbody.innerHTML = data.map(cert => `
        <tr>
            <td>${cert.domain}</td>
            <td>${cert.cert_provider}</td>
            <td>${cert.cert_status}</td>
            <td>${moment(cert.expiry_date).format('DD/MM/YYYY')}</td>
        </tr>
    `).join('');
}

function actualizarCertificadosPorEstado() {
    const data = window.certificadosPorEstado;

    const ctx = document.getElementById('certificadosEstadoChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.map(item => item.cert_status),
            datasets: [{
                data: data.map(item => item.total),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
}

function actualizarAdministradoresActivos() {
    const data = window.administradoresActivos;

    const tbody = document.querySelector('#adminTable tbody');
    tbody.innerHTML = data.map(admin => `
        <tr>
            <td>${admin.nombre_admin}</td>
            <td>${admin.email}</td>
            <td>${admin.telefono}</td>
        </tr>
    `).join('');
}

function actualizarAdministradoresPorEstado() {
    const data = window.administradoresPorEstado;

    const ctx = document.getElementById('adminEstadoChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.id_estado === 1 ? 'Activo' : 'Inactivo'),
            datasets: [{
                label: 'Administradores por Estado',
                data: data.map(item => item.total),
                backgroundColor: [
                    'rgb(75, 192, 192)',
                    'rgb(255, 99, 132)'
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function actualizarPoliticasBloqueo() {
    const data = window.politicasBloqueo;

    const politicasDiv = document.getElementById('politicasBloqueo');
    politicasDiv.innerHTML = `
        <p><strong>Máx. intentos:</strong> ${data.max_attempts}</p>
        <p><strong>Duración bloqueo:</strong> ${data.block_duration} minutos</p>
        <p><strong>Notificar admins:</strong> ${data.notify_admins ? 'Sí' : 'No'}</p>
    `;
}

// Actualizar el panel cada 5 minutos
actualizarPanel();
setInterval(actualizarPanel, 5 * 60 * 1000);
