document.querySelectorAll('.btn-action').forEach(button => {
    const dropdownId = button.id.replace('button', 'dropdown');
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        button.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
        });
    }

});


