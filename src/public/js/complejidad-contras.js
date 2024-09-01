const url = localStorage.getItem('url');
const btn = document.getElementById("btnG").addEventListener("click", () => {
    const num = document.getElementById("tiempoT").value;
    const time = document.getElementById("medidaT").value;
    fetch(url + "/users/duracion", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            duracion: num + time
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err))
});