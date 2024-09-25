const url = "http://localhost:3000/users/modulos/";
const contenedor = document.querySelector("tbody");
let resultados = "";

const modalAsignaciones = new bootstrap.Modal(
  document.getElementById("modalAsignaciones")
);

const formAsignaciones = document.querySelector("form");
const modulo = document.querySelector("#modulo");
const permisos = document.querySelector("#permisos");
const estado = document.querySelector("#estado");
const btnCrear = document.getElementById("btnActualizar");
let opcion = "actualizar";

const mostrar = (modulos) => {
  console.log("Datos recibidos:", modulos);

  if (Array.isArray(modulos)) {
    resultados = "";
    modulos.forEach((modulo) => {
      resultados += `
        <tr>
          <td>${modulo.permisos_modulo_id}</td>
          <td>${modulo.modulo_nombre}</td>
          <td>${
            modulo.permiso_nombre || "Sin permiso"
          }</td> <!-- Manejo de permiso_nombre -->
          <td>${
            modulo.relacion_estado || "Desconocido"
          }</td> <!-- Manejo de relacion_estado -->
          <td class="text-center">
            <button
                type="button"
                class="btn btn-key btn-sm btn-custom btn-group-custom">
                <i class="fa-solid fa-key"></i>
            </button>
          </td>
        </tr>
      `;
    });

    contenedor.innerHTML = resultados;
  } else {
    console.error("Los datos recibidos no son un array.");
  }
};

/* Metodo GET */
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    if (data.body && Array.isArray(data.body)) {
      mostrar(data.body);
    } else {
      console.error("La respuesta no contiene un array en 'body'.");
    }
  })
  .catch((error) => console.log(error));

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

const mostrarAlerta = (mensaje, tipo) => {
  const container = document.getElementById("alert-container");
  container.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      <h4 class="alert-heading">${tipo === "success" ? "Éxito!" : "Error!"}</h4>
      <p>${mensaje}</p>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
};

let idform = 0;
on(document, "click", ".btn-key", (e) => {
  const fila = e.target.parentNode.parentNode;
  idform = fila.children[0].innerHTML;
  const moduloForm = fila.children[1].innerHTML;
  const permisosForm = fila.children[2].innerHTML;
  const estadoForm = fila.children[3].innerHTML;

  modulo.value = moduloForm;
  permisos.value = permisosForm;
  estado.value = estadoForm;

  opcion = "actualizar";
  modalAsignaciones.show();
});

formAsignaciones.addEventListener("submit", (e) => {
  e.preventDefault();

  if (opcion == "actualizar") {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idform,
        modulo: modulo.value.trim(),
        idPermiso: permisos.value.trim(),
        estado: estado.value,
      }),
    })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      const mensaje = "Actualización exitosa"; // Define el mensaje
      const tipo = "success"; // Define el tipo de alerta
      mostrarAlerta(mensaje, tipo);
      setTimeout(() => location.reload(), 2000);
    })
    .catch(() => {
      const mensaje = "Error al actualizar el permiso"; // Define el mensaje
      const tipo = "danger"; // Define el tipo de alerta
      mostrarAlerta(mensaje, tipo);
    });
  }
  console.log("Permiso enviado:", permisos.value);
  console.log("Estado enviado:", estado.value);
  
  modalAsignaciones.hide();
});

function filterTable() {
  const query = document
    .getElementById("datatable-search-input")
    .value.toLowerCase();
  const rows = document.querySelectorAll("#tablaAsignaciones tbody tr");

  rows.forEach((row) => {
    const modulocelda = row.cells[1].textContent.toLowerCase();

    if (modulocelda.includes(query)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

document
  .getElementById("datatable-search-input")
  .addEventListener("input", filterTable);
