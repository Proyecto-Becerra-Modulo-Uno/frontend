document.querySelectorAll('.table tbody tr').forEach((row) => {
    row.addEventListener('mouseover', () => {
        row.classList.remove('table-active');
    });
    row.addEventListener('mouseout', () => {
        row.classList.add('table-active');
    });
});