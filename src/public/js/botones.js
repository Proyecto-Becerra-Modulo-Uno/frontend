
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
