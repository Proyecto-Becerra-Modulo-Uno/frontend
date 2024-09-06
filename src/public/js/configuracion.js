const btn = document.querySelector(".guardar");
const url = localStorage.getItem("url");
btn.addEventListener("click", () => {
    const TIEMPO = document.querySelector(".form-select").value;
    const INPUT_TIEMPO = parseInt(document.querySelector("#tiempoExpiracion").value);
    const INTENTOS_FALLIDOS = parseInt(document.querySelector("#intentosFallidos").value);
    let tiempoPasado = 0;
    if (TIEMPO === "min") {
        tiempoPasado = INPUT_TIEMPO * 60;
    } else if (TIEMPO == "h") {
        tiempoPasado = INPUT_TIEMPO * 3600;
    } else if (TIEMPO == "d") {
        tiempoPasado = INPUT_TIEMPO * 86400;
    }    
    fetch(url + "/users/actualizar-tiempo", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            tiempo: tiempoPasado,
            intentos: INTENTOS_FALLIDOS
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
})