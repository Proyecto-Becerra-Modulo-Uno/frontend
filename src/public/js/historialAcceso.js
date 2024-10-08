// BARRA DE BUSQUEDA
const search = document.getElementById("search_invenatry");

search.addEventListener("keyup", e => {
  const query = e.target.value.toLowerCase();

  document.querySelectorAll('#data .table-buscar').forEach(row => {

    const number = row.querySelector('.number').textContent.toLowerCase();
    const fecha = row.querySelector('.fecha').textContent.toLowerCase();
    const horario = row.querySelector('.horario').textContent.toLowerCase();
    const localizacion = row.querySelector('.localizacion').textContent.toLowerCase();
    const dispositivo = row.querySelector('.dispositivo').textContent.toLowerCase();
    const ip = row.querySelector('.ip').textContent.toLowerCase();

    if (fecha.includes(query) || horario.includes(query) || localizacion.includes(query) || dispositivo.includes(query) || ip.includes(query)) {
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