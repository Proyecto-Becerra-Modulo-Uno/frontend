const url = localStorage.getItem('url');
const btn = document.getElementById("btnG").addEventListener("click", () => {
    const num = document.getElementById("tiempoT").value;
    const time = document.getElementById("medidaT").value;
    const longitud = document.getElementById("cantC").value;
    const frecuencia = document.getElementById("frecuenciaCS").value;
    fetch(url + "/users/actualizar-politicas", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            longitud: longitud,
            duracion: num + time,
            frecuencia: frecuencia
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err))
});