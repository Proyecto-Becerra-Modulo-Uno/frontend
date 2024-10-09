document.addEventListener('DOMContentLoaded', function () {
    const newPasswordInput = document.getElementById('new-password');
    const passwordStrengthElement = document.getElementById('password-strength');

    newPasswordInput.addEventListener('input', function () {
        const password = newPasswordInput.value;
        const result = checkPasswordStrength(password);
        updatePasswordStrength(result.strength, result.tips);
    });

    function checkPasswordStrength(password) {
        let strength = 0;
        let tips = "";

        if (password.length < 8) {
            tips += "La contraseña debe ser mas larga. ";
        } else {
            strength += 1;
        }

        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
            strength += 1;
        } else {
            tips += "Utilice letras minúsculas y mayúsculas. ";
        }

        if (password.match(/\d/)) {
            strength += 1;
        } else {
            tips += "Incluye por lo menos un numero. ";
        }

        if (password.match(/[^a-zA-Z\d]/)) {
            strength += 1;
        } else {
            tips += "Incluir al menos un carácter especial. ";
        }

        return { strength, tips };
    }

    function updatePasswordStrength(strength, tips) {
        if (strength < 2) {
            passwordStrengthElement.textContent = "Seguridad baja. " + tips;
            passwordStrengthElement.style.color = "red";
        } else if (strength === 2) {
            passwordStrengthElement.textContent = "Seguridad media. " + tips;
            passwordStrengthElement.style.color = "orange";
        } else if (strength === 3) {
            passwordStrengthElement.textContent = "Seguridad alta. " + tips;
            passwordStrengthElement.style.color = "black";
        } else {
            passwordStrengthElement.textContent = "Seguridad muy alta. " + tips;
            passwordStrengthElement.style.color = "green";
        }
    }
});

// Consumo de la api
const url = localStorage.getItem('url');

document.getElementById('container_input').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtener los valores de los inputs
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
  
    // Enviar los datos al backend usando fetch
    try {
      const response = await fetch( url + '/users/cambiarContraseña', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id_usuario: '1',  // Aquí puedes obtener el id_usuario de la sesión o token
          password_actual: currentPassword,
          nueva_password: newPassword
        })
      });
  
      const result = await response.json();
  
      if (response.ok) {
        Swal.fire({
            icon: "success",
            title: "Contraseña cambiada con éxito.",
            showConfirmButton: false,
            timer: 1500
        });
      } else {
        Swal.fire({
            icon: "error",
            title: "La ontraseña no se pudo ser cambiada.",
            showConfirmButton: false,
            timer: 1500
        });
      }
    } catch (error) {
        console.log("Error de conexión.");
    }
  });