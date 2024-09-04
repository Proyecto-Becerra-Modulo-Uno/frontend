function salir() {
    Swal.fire({
        width: 400,
        height: 400,
        position: "center",
        icon: "success",
        title: "Se cerrado sesión exitosamente",
        showConfirmButton: false,
        timer: 1600
    });
}

function habilitar() {
    Swal.fire({
        title: "Ingresa tu contraseña",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "habilitar",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const githubUrl = `
              https://api.github.com/users/${login}
            `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
}

