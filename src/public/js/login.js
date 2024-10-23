// Obtener la URL del servidor
const input = document.querySelector("#url").value;
const url1 = localStorage.setItem("url", input);
const url = localStorage.getItem("url");

// Validación de la complejidad de la contraseña
document.querySelector("#contrasena").addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.getElementById('password-strength-bar');
    const strengthText = document.getElementById('password-strength-text');
    
    let strength = 0;
    
    if (password.length > 7) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    switch (strength) {
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.className = 'progress-bar bg-danger';
            strengthText.textContent = 'Muy débil';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.className = 'progress-bar bg-warning';
            strengthText.textContent = 'Débil';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.className = 'progress-bar bg-info';
            strengthText.textContent = 'Regular';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.className = 'progress-bar bg-primary';
            strengthText.textContent = 'Buena';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.className = 'progress-bar bg-success';
            strengthText.textContent = 'Muy buena';
            break;
        default:
            strengthBar.style.width = '0%';
            strengthText.textContent = '';
    }
});

// Manejador del evento click en el botón de ingresar
document.querySelector(".boton").addEventListener("click", (e) => {
    e.preventDefault();
    const usuario = document.querySelector("#usuario").value;
    const contrasena = document.querySelector("#contrasena").value;

    fetch(url + "/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            usuario: usuario,
            contrasena: contrasena
        })
    })
    .then(response => response.json())
    .then(data => {
        const rol = data.body.rol;
        sessionStorage.setItem("token", data.body.token);
        fetch(url + "/users/historial-sesion", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: data.body.id,
                ip: data.body.ip,
                platform: data.body.platform
            })
        })
        .then(response => response.json())
        .then(data => {
            if (rol === 3) {
                window.location.href = "/panel";
            } else {
                window.location.href = "/asasd";
            }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});
