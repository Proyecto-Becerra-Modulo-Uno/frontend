const input = document.querySelector("#url").value
const url1 = localStorage.setItem("url", input)
const url = localStorage.getItem("url")
const boton = document.querySelector(".boton").addEventListener("click", (e) => {
    e.preventDefault()
    const usuario = document.querySelector("#usuario").value;
    const contrasena = document.querySelector("#contrasena").value;
    fetch(url + "/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
            usuario: usuario,
            contrasena: contrasena
        })
    })
    .then(response => response.json())
    .then(data => {
        sessionStorage.setItem("token", data.body.token)
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
            console.log(data);
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})