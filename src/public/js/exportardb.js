document.getElementById('exportButton').addEventListener('click', async () => {
    const statusElement = document.getElementById('status');
    statusElement.textContent = 'Exportando...';
    
    try {
        const response = await fetch('http://localhost:3000/export-database?format=csv');
        if (!response.ok) throw new Error('Error en la exportación');
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'database_export.csv';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        statusElement.textContent = 'Exportación completada';
    } catch (error) {
        console.error('Error:', error);
        statusElement.textContent = 'Error en la exportación';
    }
});