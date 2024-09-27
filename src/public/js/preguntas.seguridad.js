var modal = document.getElementById("questionModal");
var btn = document.querySelector(".button1");
var span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe o el enlace se siga
    modal.style.display = "block";
});

span.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        const dropdownId = button.id.replace('button', 'dropdown');
        const dropdown = document.getElementById(dropdownId);
        dropdown.style.display = dropdown.style.display === 'none' ? 'flex' : 'none';
    });
});

// Consumo de la api
const url = localStorage.getItem('url');

let preguntas = [];
let id_user = 1;



// Cargar preguntas desde una API al inicio
function cargarPreguntas() {
    // Llamar a la API para obtener las preguntas
    fetch(url + "/users/listarPreguntaSeguridad", { // Cambia la URL a la de tu API
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id_usuario: id_user
        })
    })  
        .then((res) => res.json())
        .then((data) => {
            preguntas = data.body;  // Asignar las preguntas obtenidas desde la API
            renderizarPreguntas();
            
        })
        .catch((err) => {
            console.log('Error al cargar preguntas:', err);
        });
}

// Renderizar la lista de preguntas en la vista
function renderizarPreguntas() {
    const preguntasList = document.getElementById('preguntas-list');
    preguntasList.innerHTML = ''; // Limpiar la lista antes de renderizar
    preguntas.forEach((pregunta, index) => {
        preguntasList.innerHTML += `
         <div class="caja_cont_pregunta">
            <h4>Pregunta:</h4>
            <p class="dos">${pregunta.pregunta}</p>
            <h4 class="tres">Respuesta:</h4>
            <p class="cuatro">${pregunta.respuesta}</p>
            <div class="cja_boton">
                <button class="boton3" onclick="editarPregunta(${index})">Editar</button>
            </div>
        </div>

        `;
    });
}

// Función para abrir el modal y editar una pregunta
function editarPregunta(index) {
    document.getElementById('pregunta').value = preguntas[index].pregunta;
    document.getElementById('respuesta').value = preguntas[index].respuesta;
    // Almacenar el índice actual para usarlo al guardar
    document.getElementById('guardar-pregunta').dataset.index = index;
    modal.style.display = 'block';
}


// Guardar pregunta (agregar o editar)
document.getElementById('guardar-pregunta').onclick = function(event) {
    
    const pregunta = document.getElementById('pregunta').value;
    const respuesta = document.getElementById('respuesta').value;
    const index = this.dataset.index;

    if (!pregunta || !respuesta) {
        Swal.fire({
            icon: "info",
            title: "Por favor, completa ambos campos.",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (index !== undefined && index !== '') {
        // Editar pregunta existente
        const preguntaId = preguntas[index].id;  // ID de la pregunta
        editarPreguntaEnAPI({ id: preguntaId, pregunta, respuesta });
    } else {
        // Agregar nueva pregunta
        if (preguntas.length >= 3) {
            Swal.fire({
                icon: "error",
                title: "No puedes agregar más de 3 preguntas.",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        guardarPreguntas({ pregunta, respuesta });
    }


    // Cerrar el modal después de guardar
    modal.style.display = 'none';
};



// Función para guardar todas las preguntas en la base de datos (API)
function guardarPreguntas(nuevaPregunta) {
    // Enviar las preguntas a la API
    fetch(url + "/users/crearPreguntaSeguridad", {  // Cambia la URL a la de tu API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_usuario: id_user,
            pregunta: nuevaPregunta.pregunta,
            respuesta: nuevaPregunta.respuesta
        })
    })
    .then(res => res.json())
    .then(data => {
        Swal.fire({
            icon: "success",
            title: "Preguntas guardadas exitosamente.",
            showConfirmButton: false,
            timer: 1500
        });
        // Si es necesario, puedes limpiar el array de preguntas aquí
        // preguntas = [];
        
        renderizarPreguntas(); // Actualizar la vista
    })
    .catch(err => {
        console.log('Error al guardar preguntas:', err);
    });
}

// Función para editar una pregunta existente en la API
function editarPreguntaEnAPI(preguntaEditada) {
    fetch(url + "/users/actualizarPreguntaSeguridad", {  // Cambia la URL según tu API
        method: 'PUT',  // O 'POST' si tu API no usa 'PUT'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: preguntaEditada.id,  // ID de la pregunta a editar
            pregunta: preguntaEditada.pregunta,
            respuesta: preguntaEditada.respuesta
        })
    })
    .then(res => res.json())
    .then(data => {
        Swal.fire({
            icon: "success",
            title: "Pregunta actualizada exitosamente.",
            showConfirmButton: false,
            timer: 1500
        });
        cargarPreguntas();  // Recargar las preguntas después de editar
    })
    .catch(err => {
        console.log('Error al editar la pregunta:', err);
    });
}


// Cargar preguntas al iniciar la página
cargarPreguntas();

// traer datos de la tabla complejidad_prguntas MOSTRAR
// guardar informacion en la base de datos en la tabla pregunta_seguridad CREAR
// editar las preguntas y respuestas
// 	SP_LISTAR_PREGUNTA_SEGURIDAD
// SP_CREAR_PPREGUNTAS_SEGURIDAD
// SP_LISTAR_COMPLEJIDAD_PREGUNTAS
// SP_ACTUALIZAR_PREGUNTAS_SEGURIDAD





