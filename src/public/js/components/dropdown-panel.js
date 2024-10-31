// Aquí debes incluir el código para obtener el usuario del token
const tokenMenu = sessionStorage.getItem("token");

function getUserFromToken(token) {
    if (!tokenMenu) return null;
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
}

console.log("Token", tokenMenu);


const user = getUserFromToken(tokenMenu);
const menuContent = document.getElementById('menu-content');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');

if (user) {
    // Mostrar la información del usuario
    userName.textContent = user.nombre;
    userEmail.textContent = user.correo;

    // Construir el menú basado en el rol
    if (user.rol === 3) {
        menuContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center mt-2" style="flex-grow: 1;">
                <!-- Accesos Dropdown -->
                <button class="btn-action d-flex align-items-center justify-content-between mt-2" id="access-button">
                    <span class="text-start">Accesos</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div id="access-dropdown" style="display: none; flex-direction: column; height: auto; width: 100%;">
                    <div class="dropdown">
                        <a href="#" class="btn text-start text-light text-decoration-none">Configuración de acceso</a>
                        <a href="#" class="btn text-start text-light text-decoration-none">Intentos de acceso</a>
                    </div>
                </div>

                <!-- Grupos Dropdown -->
                <a href="/admin/crear-grupos"" class=" btn-action d-flex align-items-center justify-content-between
                    mt-2">Grupos</a>

                <!-- Informes Dropdown -->
                <a href="/informeActividad"
                    class=" btn btn-action d-flex align-items-center justify-content-between mt-2 text-start text-light text-decoration-none">Informes</a>

                <!-- Logs Dropdown -->
                <button class="btn-action d-flex align-items-center justify-content-between mt-2" id="admin-button">
                    <span class="text-start">Logs</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div id="admin-dropdown" style="display: none; flex-direction: column; height: auto; width: 100%;">
                    <div class="dropdown">
                        <a href="#" class="btn text-start text-light text-decoration-none">Configuración de Logs </a>
                        <a href="#" class="btn text-start text-light text-decoration-none">Logs de seguridad</a>

                    </div>
                </div>

                <!-- Modulos Dropdown -->
                <a href="#"
                    class="btn-action d-flex align-items-center justify-content-between mt-2 text-start text-light text-decoration-none">Módulos</a>

                <!-- Usuarios Dropdown -->
                <button class="btn-action d-flex align-items-center justify-content-between mt-2" id="users-button">
                    <span class="text-start">Usuarios</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div id="users-dropdown" style="display: none; flex-direction: column; height: auto; width: 100%;">
                    <div class="dropdown">
                        <a href="/admin/registro-dispositivos"
                            class="btn text-start text-light text-decoration-none">Registros de inicio de sesión</a>
                        <a href="#" class="btn text-start text-light text-decoration-none">Registros de
                            usuarios</a>
                        <a href="/admin/cuentas-bloqueadas"
                            class="btn text-start text-light text-decoration-none">Cuentas
                            bloqueadas</a>
                        <a href="/admin/usuarios-inactivos"
                            class="btn text-start text-light text-decoration-none">Usuarios
                            inactivos</a>
                    </div>
                </div>

                <!-- Seguridad Dropdown -->
                <button class="btn btn-action d-flex align-items-center justify-content-between mt-2"
                    id="records-button">
                    <span class="text-start">Seguridad</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div id="records-dropdown" style="display: none; flex-direction: column; height: 100%; width: 100%;">
                    <div class="dropdown">
                        <a href="#" class="btn text-start text-light text-decoration-none">Panel de seguridad</a>
                        <a href="#" class="btn text-start text-light text-decoration-none">Copias de seguridad</a>
                        <a href="#" class="btn text-start text-light text-decoration-none">Exportación de
                            datos</a>
                        <a href="/sesiones" class="btn text-start text-light text-decoration-none">Inicios de
                            sesión</a>
                        <a href="#" class="btn text-start text-light text-decoration-none">Detección</a>
                        <a href="/historialc" class="btn text-start text-light text-decoration-none">Monitoreo</a>
                        <a href="/verificacionDoble1"
                            class="btn text-start text-light text-decoration-none">Autenticación de
                            dos
                            factores</a>
                        <a href="/config" class="btn text-start text-light text-decoration-none">Configuración del
                            sistema</a>
                        <a href="/complejidadPreguntas" class="btn text-start text-light text-decoration-none">Preguntas
                            de
                            Seguridad</a>
                        <a href="#" class="btn text-start text-light text-decoration-none">Encriptación de
                            contraseñas</a>
                    </div>
                </div>
            </div>
        `; 

        document.querySelectorAll('.btn-action').forEach(button => {
            const dropdownId = button.id.replace('button', 'dropdown');
            const dropdown = document.getElementById(dropdownId);
            if (dropdown) {
                button.addEventListener('click', () => {
                    dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
                });
            }
        });
    } else if (user.rol === 2) {
        menuContent.innerHTML = `...`;
    }

    // Aquí puedes mantener el código para el menú flotante
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
}