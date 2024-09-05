const url = document.querySelector(".id").value;
localStorage.setItem("url", url);
const token = sessionStorage.getItem('token');
if (token == "" || token == null){
    window.location.href = "/";
}
if (url == "" || url == null){
    window.location.href = "/";
}
const options = {
    method: 'POST',
    headers: {
        "content-type": "application/json",
        "x-access-token": token
    }
}
fetch(url, options)
.then(response => response.json())
.then(data => {
    
})
const btnAdd = document.querySelector(".agregar");
btnAdd.addEventListener("click", () => {
    window.location.href = "/registro";
});

const btnDelete = document.querySelectorAll(".btn-delete").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const row = e.target.closest(".table-active");
        const id = row.querySelector(".id_usuario").textContent.trim(); 
        const url = localStorage.getItem("url");
        
        fetch(url + `/users/estado/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                estado: 3
            })
        })
        .then(response => response.json())
        .then(data => {
            location.reload();
        })
        .catch(err => console.error(err));
    });
});

const selects = document.querySelectorAll(".form-select").forEach(selector => {
    selector.addEventListener("change", (e) => {
        const row = e.target.closest(".table-active");
        const option = e.target.value
        const id = row.querySelector(".id_usuario").textContent.trim(); 
        const url = localStorage.getItem("url");
        fetch(url + "/users/asignar-rol", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                usuarioId: id,
                rolId: option
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err))
    })
})
