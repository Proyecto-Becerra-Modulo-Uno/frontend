const url = localStorage.getItem('url');
const btn = document.getElementById("btnG").addEventListener("click", () => {
    const num = document.getElementById("tiempoT").value;
    const time = document.getElementById("medidaT").value;
    const longitud = parseInt(document.getElementById("cantC").value);
    const frecuencia = document.getElementById("frecuenciaCS").value;
    const intervalo = parseInt(document.getElementById("cantInt").value);
    fetch(url + "/users/actualizar-politicas", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            longitud: longitud,
            duracion: num + time,
            frecuencia: frecuencia,
            intervalo: intervalo
        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Bien")
    })
    .catch(err => console.error(err))
});