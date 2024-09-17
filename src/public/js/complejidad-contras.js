const url = localStorage.getItem('url');
// Guardar Cambios
const btn = document.getElementById("btnG").addEventListener("click", () => {
    const longitud = document.getElementById("cantC").value;
    const tiempoT = document.getElementById("tiempoT").value;
    const frecuencia = document.getElementById("frecuenciaCS").value;
    const intervalo = document.getElementById("intervaloCam").value;
    const cantMin = document.getElementById("cantMin").value;
    const cantMay = document.getElementById("cantMay").value;
    const cantNum = document.getElementById("cantNum").value;
    const cantEsp = document.getElementById("cantEsp").value;
    const num = document.getElementById("tiempoT").value;
    const time = document.getElementById("medidaT").value;

    fetch(url + "/users/actualizar-politicas", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            longitud: longitud,

            duracion: tiempoT,
            frecuencia: frecuencia,
            intervalo: intervalo,
            cant_min_minusculas: cantMin,
            cant_min_mayusculas: cantMay,
            cant_min_numeros: cantNum,
            cant_min_caracteres_esp: cantEsp,
            duracion: num + time,
            frecuencia: frecuencia,
            intervalo: intervalo

        })
    })
    .then(res => res.json())
    .then(data => {
        alert("Bien")
    })
    .catch(err => console.error(err))
});

// Mostrar Datos

fetch(url + "/users/listarPoliticasYTerminos")
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      console.error("error al mostrar datos", data);
    } else {

        document.getElementById("cantC").value = data.body[0].cant_caracteres;
        document.getElementById("tiempoT").value = data.body[0].duracion_token;
        document.getElementById("frecuenciaCS").value = data.body[0].frecuencia_copia_seguridad;
        document.getElementById("intervaloCam").value = data.body[0].intervalos_cambio_contrasena;

        document.getElementById("cantMin").value = data.body[0].cant_min_minusculas;
        document.getElementById("cantMay").value = data.body[0].cant_min_mayusculas;
        document.getElementById("cantNum").value = data.body[0].cant_min_numeros;
        document.getElementById("cantEsp").value = data.body[0].cant_min_caracteres_esp;

    }

  })
  .catch((err) => console.log(err));


