document.querySelectorAll('.btn-primary').forEach(button => {
    const dropdownId = button.id.replace('button', 'dropdown');
    const dropdown = document.getElementById(dropdownId);

    // Verifica si el dropdown correspondiente existe
    if (dropdown) {
        button.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
        });
    }
});
