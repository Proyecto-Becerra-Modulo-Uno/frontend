fetch('http://localhost:3000/users/actividades-sospechosas')
    .then(response => {
        if (!response.ok) {
            throw new Error('Red no ok');
        }
        return response.json(); // Asegúrate de que estás manejando JSON
    })
    .then(data => {
        // Verifica si 'data' es un array antes de intentar iterar sobre él
        if (Array.isArray(data)) {
            const actividadesBody = document.getElementById('actividades-body');
            actividadesBody.innerHTML = ''; // Limpiar el contenido previo

            data.forEach(actividad => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${actividad.id}</td>
                    <td>${actividad.id_usuario}</td>
                    <td>${actividad.tipo_actividad}</td>
                    <td>${actividad.fecha}</td>
                `;
                actividadesBody.appendChild(row);
            });
        } else {
            console.error('La respuesta no es un array:', data);
        }
    })
    .catch(error => {
        console.error('Error al cargar actividades sospechosas:', error);
    });
