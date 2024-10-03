const BTN_CREAR = document.querySelector(".crear");
const BTN_ADD_PARTICIPANTE = document.querySelector("#add-participant");
const URL = localStorage.getItem("url");

const participantesTextarea = document.querySelector(".participantes");
const participanteInput = document.querySelector(".participante");

function addParticipant() {
    const correo = participanteInput.value.trim();
    if (correo) {
        const existingParticipants = participantesTextarea.value.trim();
        participantesTextarea.value = existingParticipants ? `${existingParticipants}\n${correo}` : correo;
        participanteInput.value = '';
    }
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addParticipant();
    }
}

BTN_ADD_PARTICIPANTE.addEventListener("click", addParticipant);
participanteInput.addEventListener("keydown", handleEnterKey);

BTN_CREAR.addEventListener("click", () => {
    const NOMBRE = document.querySelector(".nombre").value;
    const DESCRIPCION = document.querySelector(".descripcion").value;
    fetch(URL + "/admin/crear-grupo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: NOMBRE,
            desc: DESCRIPCION
        })
    })
    .then(res => res.json())
    .then(data => {
        fetch(URL + "/admin/ultimo-grupo")
        .then(res => res.json())
        .then(data => {
            const ID = data.body[0].ultimo_id;
            const participantes = participantesTextarea.value.split('\n').map(email => email.trim()).filter(email => email);
            const addParticipantsPromises = participantes.map(correo => 
                fetch(URL + "/admin/añadir-integrante", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ correo, grupo: ID })
                })
            );
            return Promise.all(addParticipantsPromises);
        })
        .then(() => {
            Swal.fire({
                title: '¡Éxito!',
                text: 'Se ha creado el grupo con éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/crear-grupos";
                }
            });
        })
        .catch(err => console.error("Error añadiendo integrantes: " + err));
    })
    .catch(err => console.error("Error creando el grupo: " + err));
});
