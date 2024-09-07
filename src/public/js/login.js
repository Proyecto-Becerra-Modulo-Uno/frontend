const input = document.querySelector("#url").value;
const url1 = localStorage.setItem("url", input);
const url = localStorage.getItem("url");

document.querySelector(".boton").addEventListener("click", (e) => {
    e.preventDefault();
    
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
            alert("correo o contraseña incorrecta"); 
            return;
        }
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
                window.location.href = "/asasd"; // cambien esto por la parte del usuario corriente
            }
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
        console.log(err);
        alert("Error en el inicio de sesión. Por favor, intente de nuevo.");
    });
});
