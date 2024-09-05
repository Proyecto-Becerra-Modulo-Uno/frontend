document.querySelectorAll('.btn-delete').forEach(button => {
    button.addEventListener('click', function () {
        // Verificamos si el botón es el de eliminar (🚫)
        const row = this.closest('tr');
        
        // Verificamos si la fila ya tiene la clase 'bloqueado'
        if (row.classList.contains('bloqueado')) {
            // Restauramos el estado a "Activo"
            row.style.backgroundColor = '#CCFFCC'; // Verde claro
            const estadoCell = row.querySelector('td:nth-child(6)');
            estadoCell.textContent = 'Activo';
            
            // Quitamos la clase 'bloqueado'
            row.classList.remove('bloqueado');
        } else {
            // Cambiamos el color de fondo de la fila
            row.style.backgroundColor = '#FFCCCC'; // Rojo claro
            
            // Cambiamos el texto del estado a "Bloqueado"
            const estadoCell = row.querySelector('td:nth-child(6)');
            estadoCell.textContent = 'Bloqueado';
            
            // Añadimos la clase 'bloqueado'
            row.classList.add('bloqueado');
        }
    });
});
 
// Seleccion para cambiar el estado de bloqueado a desbloqueado
document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        
        document.querySelector('#permissionsModal .btn-primary').addEventListener('click', function() {
            const estadoCell = row.querySelector('td:nth-child(5)');
            if (estadoCell.textContent === 'Bloqueado') {
                estadoCell.textContent = 'Desbloqueado';
                row.style.backgroundColor = '#CCFFCC'; 
                
                row.querySelector('.btn-edit').style.backgroundColor = '#28a745';
            }
            
            const modal = bootstrap.Modal.getInstance(document.getElementById('permissionsModal'));
            modal.hide();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        new bootstrap.Modal(modal);
    });
});



function saveBlockingPolicies() {
    // Get form values
    const maxAttempts = document.getElementById('maxAttempts').value;
    const blockDuration = document.getElementById('blockDuration').value;
    const notifyAdmins = document.getElementById('notifyAdmins').checked;

    // Prepare data to send to the backend
    const data = {
        maxAttempts: maxAttempts,
        blockDuration: blockDuration,
        notifyAdmins: notifyAdmins
    };

    // Send data to the backend (example endpoint and method)
    fetch('/api/update-blocking-policies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + YOUR_AUTH_TOKEN // Adjust as needed
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally handle success, e.g., show a confirmation message
    })
    .catch((error) => {
        console.error('Error:', error);
        // Optionally handle error
    });

    // Close the modal (optional)
    const modal = bootstrap.Modal.getInstance(document.getElementById('blockingPoliciesModal'));
    modal.hide();
}