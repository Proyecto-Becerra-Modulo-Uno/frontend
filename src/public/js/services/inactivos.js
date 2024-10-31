
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Obtener la configuración inicial
        const urlConfig = 'http://localhost:3000/admin/mostrar-configuracion-desactivacion';
        const responseConfig = await fetch(urlConfig);

        if (!responseConfig.ok) {
            throw new Error('Error al cargar la configuración');
        }

        const dataConfig = await responseConfig.json();

        if (dataConfig.error) {
            throw new Error(dataConfig.message || 'Error en la respuesta del servidor');
        }

        const config = dataConfig.body[0]; // Asumiendo que siempre habrá al menos un elemento

        // Llenar los campos del formulario con los datos obtenidos
        document.getElementById('tiempoInactividad').value = config.tiempo_inactividad;
        document.getElementById('unidadInactividad').value = config.unidad_inactividad;
        document.getElementById('tiempoNotificacion').value = config.tiempo_notificacion;
        document.getElementById('unidadNotificacion').value = config.unidad_notificacion;
        document.getElementById('tiempoEliminacion').value = config.tiempo_eliminacion;
        document.getElementById('unidadEliminacion').value = config.unidad_eliminacion;
        document.getElementById('tiempoGuardar').value = config.tiempo_guardar;
        document.getElementById('unidadGuardar').value = config.unidad_guardar;
        document.getElementById('tiempoReactivacion').value = config.tiempo_reactivacion;
        document.getElementById('unidadReactivacion').value = config.unidad_reactivacion;

    } catch (error) {
        console.error('Error al obtener la configuración:', error);
        alert('No se pudo cargar la configuración. Intente de nuevo más tarde.');
    }
});

document.getElementById('formDesactivarUsuario').addEventListener('submit', async function (event) {
    event.preventDefault();
    const tiempoInactividad = document.getElementById('tiempoInactividad').value;
    const unidadInactividad = document.getElementById('unidadInactividad').value;
    const tiempoNotificacion = document.getElementById('tiempoNotificacion').value;
    const unidadNotificacion = document.getElementById('unidadNotificacion').value;
    const tiempoEliminacion = document.getElementById('tiempoEliminacion').value;
    const unidadEliminacion = document.getElementById('unidadEliminacion').value;
    const tiempoGuardar = document.getElementById('tiempoGuardar').value;
    const unidadGuardar = document.getElementById('unidadGuardar').value;
    const tiempoReactivacion = document.getElementById('tiempoReactivacion').value;
    const unidadReactivacion = document.getElementById('unidadReactivacion').value;

    const data = {
        tiempoInactividad,
        unidadInactividad,
        tiempoNotificacion,
        unidadNotificacion,
        tiempoEliminacion,
        unidadEliminacion,
        tiempoGuardar,
        unidadGuardar,
        tiempoReactivacion,
        unidadReactivacion
    };

    console.log(data);
    try {
        const url = "http://localhost:3000";
        const response = await fetch(`${url}/admin/cambiar-configuracion-desactivacion`, {
            method: 'PUT', // Cambiar a 'PUT' si tu backend lo requiere
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            alert('Configuración guardada exitosamente');
        } else {
            const error = await response.json();
            console.error(error);
            alert('Error al guardar la configuración: ' + error.message);
        }
    } catch (err) {
        console.error('Error en la solicitud:', err);
        alert('Error en la conexión con el servidor');
    }
});

