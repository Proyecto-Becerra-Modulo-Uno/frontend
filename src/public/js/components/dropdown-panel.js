document.querySelectorAll('.btn-action').forEach(button => {
    const dropdownId = button.id.replace('button', 'dropdown');
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        button.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuToggle.addEventListener("click", function () {
        const isVisible = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isVisible ? "none" : "block";
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});



