//Archivo para montar carpeta en Git hub
const users = [
    { nombre: 'Pepito', apellido: 'perez', celular: '5555-5443-233', contrasena: '********', rol: '-', estado: 'Activo' },
    { nombre: 'Pepito', apellido: 'perez', celular: '5555-5443-233', contrasena: '********', rol: '-', estado: 'Activo' },
    { nombre: 'Pepito', apellido: 'perez', celular: '5555-5443-233', contrasena: '********', rol: '-', estado: 'Activo' },
    { nombre: 'Pepito', apellido: 'perez', celular: '5555-5443-233', contrasena: '********', rol: '-', estado: 'Activo' },
    { nombre: 'Pepito', apellido: 'perez', celular: '5555-5443-233', contrasena: '********', rol: '-', estado: 'Activo' },
];

const itemsPerPage = 5;
let currentPage = 1;

function displayUsers() {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedUsers = users.slice(start, end);

    paginatedUsers.forEach(user => {
        const row = table.insertRow();
        Object.values(user).forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    });
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayUsers();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < Math.ceil(users.length / itemsPerPage)) {
        currentPage++;
        displayUsers();
    }
});

displayUsers();