document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownId = button.id.replace('button', 'dropdown');
        const dropdown = document.getElementById(dropdownId);
        dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
    });
});

const url = localStorage.getItem('url');

// Guardar Cambios
const btn = document.getElementById("btnG").addEventListener("click", () => {
    const caracteresP = document.getElementById("caracteresP").value;
    const caracteresR = document.getElementById("caracteresR").value;
    const cantP = document.getElementById("cantP").value;
    
    fetch(url + "/users/actualizarComplePreguntas", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            caracteres_pregunta: caracteresP,
            caracteres_respuesta: caracteresR,
            cant_preguntas: cantP
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err))
});

// Mostrar Datos

fetch(url + "/users/listarComplePreguntas")
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      console.error("error al mostrar datos", data);
    } else {

        document.getElementById("caracteresP").value = data.body[0].caracteres_pregunta;
        document.getElementById("caracteresR").value = data.body[0].caracteres_respuesta;
        document.getElementById("cantP").value = data.body[0].cant_preguntas;

    }

  })
  .catch((err) => console.log(err));


