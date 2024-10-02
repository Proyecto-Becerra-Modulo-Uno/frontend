const input = document.querySelector("#url").value;
const url1 = localStorage.setItem("url", input);
const url = localStorage.getItem("url");
let intentosFallidos = 0;
let intentosPermitidos = 0;

fetch(url + "/politicas")
    .then(response => response.json())
    .then(data => {
        intentosPermitidos = data.body[0].intentos_fallidos_permitidos;
    })
    .catch(err => {
        console.log(err);
        alert("Error al obtener las políticas del sistema.");
    });

const BTN = document.querySelector(".boton");
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
                fetch(url + "/users/bloquearIntentos", {
                    headers: { "Content-Type": "application/json" },
                    method: "PUT",
                    body: JSON.stringify({
                        email: usuario,
                        estado: 3
                    })
                })
                .then(() => {
                    alert("Has alcanzado el límite de intentos fallidos. Tu cuenta fue bloqueada.");
                })
                .catch(err => {
                    console.log(err);
                    alert("Error al bloquear la cuenta.");
                });
            }
            return;
        }

        if (data.status === 403) {
            alert("Esta cuenta está bloqueada, no es posible ingresar.");
            return;
        }

        intentosFallidos = 0;
        const rol = data.body.rol;
        sessionStorage.setItem("token", data.body.token);

        fetch(url + "/admin/historial-sesion", {
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
                window.location.href = "/usuario-normal"; 
            }
        })
        .catch(err => {
            console.log(err);
            alert("Error al registrar el historial de sesión.");
        });
    })
    .catch(err => {
        console.log(err);
        alert("Error en el inicio de sesión. Por favor, intente de nuevo.");
    });
});