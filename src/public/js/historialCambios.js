// BARRA DE BUSQUEDA
const search = document.getElementById("search_invenatry");

search.addEventListener("keyup", e => {
  const query = e.target.value.toLowerCase();

  document.querySelectorAll('#data .table-buscar').forEach(row => {

    const number = row.querySelector('.number').textContent.toLowerCase();
    const fecha = row.querySelector('.fecha').textContent.toLowerCase();
    const horario = row.querySelector('.horario').textContent.toLowerCase();
    const permisos = row.querySelector('.permisos').textContent.toLowerCase();
    // const estado = row.querySelector('.estado').textContent.toLowerCase();

    if (fecha.includes(query) || horario.includes(query) || permisos.includes(query)) {
      row.classList.remove('filtro');
    } else {
      row.classList.add('filtro');
    }
  });

});

const style = document.createElement('style')
style.innerHTML = `
.filtro {
    display: none;
    }
`;

document.head.appendChild(style);