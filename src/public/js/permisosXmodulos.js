document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".actualizar_permiso");
  
    buttons.forEach((button) => {
      button.addEventListener("click", async () => {
        const modulo = button.getAttribute("data-modulo");
        const idPermiso = button.getAttribute("data-permiso");
        let estadoActual = button.getAttribute("data-estado"); // Estado actual del botón
  
        // Cambiar el estado antes de hacer la solicitud (optimización para respuesta visual inmediata)
        const nuevoEstado = estadoActual === "1" ? "0" : "1";
  
        try {
          // Enviar solicitud al backend para actualizar estado en la base de datos
          const response = await fetch("http://localhost:3000/users/estado", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ modulo, idPermiso, estado: nuevoEstado }),
          });
  
          const result = await response.json();
  
          if (result.success) {
            // Si el backend confirma el éxito, actualiza el botón visualmente
            if (nuevoEstado === "1") {
              button.classList.remove("btn-danger");
              button.classList.add("btn-success");
              button.textContent = "Activado";
            } else {
              button.classList.remove("btn-success");
              button.classList.add("btn-danger");
              button.textContent = "Inactivo";
            }
  
            // Actualizar el atributo de estado en el botón
            button.setAttribute("data-estado", nuevoEstado);
          } else {
            console.error("Error en la actualización del estado en el servidor");
          }
        } catch (error) {
          console.error("Error en la solicitud al servidor:", error);
        }
      });
    });
  });
  