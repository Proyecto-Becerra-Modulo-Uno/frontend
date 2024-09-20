function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Añadir logo
    // Nota: Debes reemplazar 'ruta/al/logo.png' con la ruta real de tu logo
    doc.addImage('../img/logo1.png', 'PNG', 10, 10, 40, 40);

    // Título
    doc.setFontSize(18);
    doc.text('Reporte de Log de Seguridad', 14, 60);

    // Obtener datos de la tabla
    const tabla = document.querySelector('table');
    const filas = tabla.querySelectorAll('tbody tr');

    // Configuración de la tabla en el PDF
    const columnas = ['ID', 'Horario', 'Usuario ID', 'Tipo Evento', 'Descripción'];
    let datos = [];

    filas.forEach(fila => {
        let filaDatos = [];
        fila.querySelectorAll('td').forEach(celda => {
            filaDatos.push(celda.textContent);
        });
        datos.push(filaDatos);
    });

    // Añadir la tabla al PDF
    doc.autoTable({
        head: [columnas],
        body: datos,
        startY: 70,
        styles: { fontSize: 8 },
        headStyles: { fillColor: [66, 135, 245] }
    });

    // Guardar el PDF
    doc.save('reporte_log_seguridad.pdf');
}