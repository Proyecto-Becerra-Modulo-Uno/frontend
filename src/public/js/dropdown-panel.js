document.querySelectorAll('.btn-primary').forEach(button => {
    const dropdownId = button.id.replace('button', 'dropdown');
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        button.addEventListener('click', () => {
            dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
        });
    }
});
const adminMenuIcon = document.getElementById('admin-menu-icon');
const adminMiniMenu = document.getElementById('admin-mini-menu');
const logout = document.getElementById('logout');

logout.addEventListener('click', () =>{
    sessionStorage.clear();
})
adminMenuIcon.addEventListener('click', () => {
    if (adminMiniMenu.style.display === 'none' || adminMiniMenu.style.display === '') {
        adminMiniMenu.style.display = 'block';
    } else {
        adminMiniMenu.style.display = 'none';
    }
});
document.addEventListener('click', (event) => {
    if (!adminMenuIcon.contains(event.target) && !adminMiniMenu.contains(event.target)) {
        adminMiniMenu.style.display = 'none';
    }
});
