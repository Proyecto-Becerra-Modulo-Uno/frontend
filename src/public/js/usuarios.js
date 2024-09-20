const submit = document.querySelector(".boton");
const url = localStorage.getItem("url");

submit.addEventListener("click", (e) => {
    // Evitar el comportamiento predeterminado del botón (recargar la página)
    e.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.querySelector(".nombre").value;
    const usuario = document.querySelector(".usuario").value;
    const correo = document.querySelector(".correo").value;
    const contrasena = document.querySelector(".contrasena").value;
    const check = document.getElementById("consentimiento_datos");
    let rol = document.querySelector("#listarol").value;
    const telefono = document.querySelector(".numero").value;

    // Convertir el valor de rol a un número entero
    rol = parseInt(rol);

    // Crear el arreglo de datos
    const datos = [usuario, nombre, correo, telefono, contrasena, rol];

    // Mostrar los datos en la consola
    console.log('Datos del formulario:', datos);
    
    // Verificación de los campos
    if (usuario && nombre && correo && contrasena && telefono) {
        fetch(url + "/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                usuario: usuario,  
                nombre: nombre, 
                email: correo, 
                telefono: telefono,
                contrasena: contrasena,
                rol: rol, 
                estado: 1
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            Swal.fire({
                title: '¡Éxito!',
                text: 'Se ha creado el usuario con éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/panel";
                }
            });
        })
        .catch(err => {
            console.error(err);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al crear el usuario.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, completa todos los campos correctamente.',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        });
    }
});
