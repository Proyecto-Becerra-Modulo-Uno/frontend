const urlBack = "http://localhost:3000/users"

document.addEventListener('DOMContentLoaded', () => {
    const saveConfigBtn = document.getElementById('saveConfig');
    const logsBody = document.querySelector('.logs-body');

    // Función para obtener los logs y mostrarlos en el frontend
    const fetchLogs = (levels) => {
        // Hacer una solicitud al backend
        fetch(`${urlBack}/logs-prueba?levels=${levels}`)
            .then(response => response.json())
            .then(data => {
                // Limpiar el contenido previo
                logsBody.innerHTML = '';

                // Verificar si se recibieron logs
                if (data.length > 0) {
                    data.forEach(log => {
                        // Crear elementos HTML para cada log
                        const logItem = document.createElement('div');
                        logItem.classList.add('log-item', 'p-2', 'mb-2', 'bg-white', 'border', 'd-flex', 'flex-column');


                        // Insertar el contenido del log
                        logItem.innerHTML = `
                            <strong>Nivel:</strong> ${log.level}<br>
                            <strong>Mensaje:</strong> ${log.message}<br>
                            <strong>Timestamp:</strong> ${new Date(log.timestamp).toLocaleString()}
                        `;

                        // Añadir el log al contenedor
                        logsBody.appendChild(logItem);
                    });
                } else {
                    // Si no hay logs, mostrar un mensaje
                    logsBody.innerHTML = '<p class="text-muted">No se encontraron logs para los niveles seleccionados.</p>';
                }
            })
            .catch(error => {
                console.error('Error al obtener los logs:', error);
                logsBody.innerHTML = '<p class="text-danger">Error al obtener los logs</p>';
            });
    };

    // Evento para el botón de guardar configuración
    saveConfigBtn.addEventListener('click', () => {
        // Obtener los niveles de los checkboxes
        const levels = [];
        if (document.getElementById('toggleAllActions').checked) levels.push('DEBUG');
        if (document.getElementById('toggleLoginAlert').checked) levels.push('INFO');
        if (document.getElementById('toggleUserLogs').checked) levels.push('WARN');
        if (document.getElementById('toggleLoginLogs').checked) levels.push('ERROR');
        if (document.getElementById('toggleFatalLogs').checked) levels.push('FATAL');

        // Llamar a la función para obtener los logs filtrados por los niveles seleccionados
        fetchLogs(levels.join(','));
    });

    // Cargar los logs iniciales (puedes modificar esto según lo necesites)
    fetchLogs('DEBUG,INFO,WARN,ERROR,FATAL');
});
