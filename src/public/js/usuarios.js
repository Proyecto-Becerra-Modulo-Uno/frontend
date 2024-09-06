const submit = document.querySelector(".boton");
const url = localStorage.getItem("url")
submit.addEventListener("click", () => {
    const nombre = document.querySelector(".nombre").value
    const correo = document.querySelector(".correo").value
    const usuario = document.querySelector(".usuario").value
    const contrasena = document.querySelector(".contrasena").value
    const confirmar = document.querySelector(".confirmar").value
    const check = document.getElementById("consentimiento_datos")

    if (usuario && nombre && correo && (contrasena === confirmar) && check.checked) {
        fetch(url + "/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                usuario: usuario,  
                nombre: nombre, 
                email: correo, 
                contrasena: contrasena
            })
        })
        .then(data => {
            window.location.href = "/panel"
        })
        .catch(err => console.log(err))
    }
})