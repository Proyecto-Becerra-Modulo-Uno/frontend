document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownId = button.id.replace('button', 'dropdown');
        const dropdown = document.getElementById(dropdownId);
        dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
    });
});