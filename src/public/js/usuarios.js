const submit = document.querySelector(".boton");
const url = localStorage.getItem("url");

submit.addEventListener("click", () => {
    const nombre = document.querySelector(".nombre").value;
    const correo = document.querySelector(".correo").value;
    const usuario = document.querySelector(".usuario").value;
    const contrasena = document.querySelector(".contrasena").value;
    const confirmar = document.querySelector(".confirmar").value;
    const check = document.getElementById("consentimiento_datos");

    if (usuario && nombre && correo && (contrasena === confirmar) && check.checked) {
        fetch(url + "/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                usuario: usuario,  
                nombre: nombre, 
                email: correo, 
                contrasena: contrasena
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // O cualquier formato de respuesta que esperes
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
