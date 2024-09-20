// document.querySelectorAll('.btn-delete').forEach(button => {
//     button.addEventListener('click', function () {
//         // Verificamos si el botón es el de eliminar (🚫)
//         const row = this.closest('tr');
        
//         // Verificamos si la fila ya tiene la clase 'bloqueado'
//         if (row.classList.contains('bloqueado')) {
//             // Restauramos el estado a "Activo"
//             row.style.backgroundColor = '#CCFFCC'; // Verde claro
//             const estadoCell = row.querySelector('td:nth-child(6)');
//             estadoCell.textContent = 'Activo';
            
//             // Quitamos la clase 'bloqueado'
//             row.classList.remove('bloqueado');
//         } else {
//             // Cambiamos el color de fondo de la fila
//             row.style.backgroundColor = '#FFCCCC'; // Rojo claro
            
//             // Cambiamos el texto del estado a "Bloqueado"
//             const estadoCell = row.querySelector('td:nth-child(6)');
//             estadoCell.textContent = 'Bloqueado';
            
//             // Añadimos la clase 'bloqueado'
//             row.classList.add('bloqueado');
//         }
//     });
// });
 
// Seleccion para cambiar el estado de bloqueado a desbloqueado

document.getElementById('btn_desbloquear').addEventListener('click', function () {
    const id_usuariodes = document.getElementById('id_usuariodes').value;
    const url = document.getElementById('url').value;
    const row = document.querySelector(`input[value="${id_usuariodes}"]`).closest('tr');
    const estadoCell = row.querySelector('td:nth-child(4)'); // Actualiza si la columna de estado es diferente

    // Realizamos la solicitud para desbloquear al usuario
    fetch(`${url}/admin/desbloquear-usuario`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id_usuariodes })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al desbloquear el usuario');
        }
        return response.json(); // Intentamos parsear la respuesta JSON
    })
    .then(data => {
        // Si la respuesta no tiene success, aún puede ser exitosa si no hay errores
        if (data) {
            // Actualizamos la UI para reflejar el desbloqueo
            estadoCell.textContent = 'Desbloqueado';

            // Cerrar el modal después de desbloquear correctamente
            const modalElement = document.getElementById('permissionsModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
            }

            // Recargar la tabla o la página para actualizar la lista de usuarios
            setTimeout(() => {
                location.reload();
            }, 500); // Recarga la página después de 500ms para dar tiempo a la actualización de la UI
            
            console.log('Usuario desbloqueado exitosamente');
        } else {
            console.error('Respuesta sin datos esperados al desbloquear el usuario');
            alert('Error: No se pudo desbloquear el usuario.');
        }
    })
    .catch(error => {
        // Captura cualquier otro error
        console.error('Error en la solicitud:', error);
        alert('Error de conexión. Inténtelo de nuevo.');
    });
});


// function saveBlockingPolicies() {
//     // Get form values
//     const maxAttempts = document.getElementById('maxAttempts').value;
//     const blockDuration = document.getElementById('blockDuration').value;
//     const notifyAdmins = document.getElementById('notifyAdmins').checked;

//     // Prepare data to send to the backend
//     const data = {
//         maxAttempts: maxAttempts,
//         blockDuration: blockDuration,
//         notifyAdmins: notifyAdmins
//     };

//     // Send data to the backend (example endpoint and method)
//     fetch('/api/update-blocking-policies', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + YOUR_AUTH_TOKEN // Adjust as needed
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         // Optionally handle success, e.g., show a confirmation message
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         // Optionally handle error
//     });

//     // Close the modal (optional)
//     const modal = bootstrap.Modal.getInstance(document.getElementById('blockingPoliciesModal'));
//     modal.hide();
// }

// peticion para politicas de bloqueo de cuentas

function saveBlockingPolicies() {
    const maxAttempts = document.getElementById('maxAttempts').value;
    const blockDuration = document.getElementById('blockDuration').value;
    const notifyAdmins = document.getElementById('notifyAdmins').checked;

    const data = {
        maxAttempts: maxAttempts,
        blockDuration: blockDuration,
        notifyAdmins: notifyAdmins
    };

    fetch('/update-blocking-policies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al guardar las políticas de bloqueo.');
    });
}