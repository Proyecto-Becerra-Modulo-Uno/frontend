const input = document.querySelector("#url").value;
const url1 = localStorage.setItem("url", input);
const url = localStorage.getItem("url");
let intentosFallidos = 0;
let intentosPermitidos = 0;
fetch(url + "/users/listar-politicas")
    .then(response => response.json())
    .then(data => {
        intentosPermitidos = data.body[0].intentos_fallidos_permitidos; 
    })
    .catch(err => {
        console.log(err);
        alert("Error al obtener las políticas del sistema.");
    });
const BTN = document.querySelector(".boton")
BTN.addEventListener("click", (e) => {
    e.preventDefault();
    if (intentosFallidos >= intentosPermitidos) {
        alert("Has alcanzado el límite de intentos fallidos. Por favor, intenta más tarde.");
        BTN.style.display = "none";
        return;
    }
    const usuario = document.querySelector("#usuario").value;
    const contrasena = document.querySelector("#contrasena").value;

    fetch(url + "/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            usuario: usuario,
            contrasena: contrasena
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 404 || data.status === 401) {
            intentosFallidos++;
            alert("Correo o contraseña incorrecta");
            if (intentosFallidos >= intentosPermitidos) {
                alert("Has alcanzado el límite de intentos fallidos. No podrás seguir intentando.");
            }
            return;
        }
        intentosFallidos = 0;
        const rol = data.body.rol;
        sessionStorage.setItem("token", data.body.token); 
        fetch(url + "/users/historial-sesion", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: data.body.id,
                ip: data.body.ip,
                platform: data.body.platform
            })
        })
        .then(response => response.json())
        .then(() => {
            if (rol === 3) {
                window.location.href = "/panel"; 
            } else {
                window.location.href = "/uasfjsafja"; // Pongan el del usuario normal eh
            }
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
        console.log(err);
        alert("Error en el inicio de sesión. Por favor, intente de nuevo.");
    });
});