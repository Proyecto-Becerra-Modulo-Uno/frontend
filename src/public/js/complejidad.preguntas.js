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

    // Verificar que lo campos no esten vacios
    if (!caracteresP || !caracteresR || !cantP) {
        Swal.fire({
            icon: "warning",
            title: "Campos vacios!",
            showConfirmButton: false,
            timer: 1500,
        });
        return;
    }

    fetch(url + "/users/actualizarComplePreguntas", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            caracteres_pregunta: caracteresP,
            caracteres_respuesta: caracteresR,
            cant_preguntas: cantP
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                icon: "success",
                title: "La informacion ha sido guardada",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch(err => console.error(err))
});

const btnC = document.getElementById("btnC").addEventListener("click", () => {
    Swal.fire({
        icon: "error",
        title: "No se guardo la informacion",
        showConfirmButton: false,
        timer: 1500
    });
})




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


