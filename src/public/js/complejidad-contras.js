const url = localStorage.getItem('url');
const btn = document.getElementById("btnG").addEventListener("click", () => {
    const longitud = document.getElementById("cantC").value;
    const tiempoT = document.getElementById("tiempoT").value;
    const frecuencia = document.getElementById("frecuenciaCS").value;
    const intervalo = document.getElementById("cantEsp").value;
    console.log(longitud, tiempoT, frecuencia, intervalo);
    
    fetch(url + "/users/actualizar-politicas", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            longitud: longitud,
            duracion: tiempoT,
            frecuencia: frecuencia,
            intervalo: intervalo
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err))
});