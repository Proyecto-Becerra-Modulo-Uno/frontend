document.getElementById("submitBtn").addEventListener("click", async (event) => {
  event.preventDefault();

  const nuevaContrasena = document.getElementById("clave").value;
  const confirmarContrasena = document.getElementById("claveConfirmacion").value;
  const messageDiv = document.getElementById("message");

  clearMessages(messageDiv);

  if (!nuevaContrasena || !confirmarContrasena) {
    displayMessage(messageDiv, 'Por favor, complete ambos campos.', 'error-message');
    return;
  }

  if (nuevaContrasena !== confirmarContrasena) {
    displayMessage(messageDiv, 'Las contraseñas no coinciden.', 'error-message');
    return;
  }

  const email = localStorage.getItem("emailRecuperacion");
  const codigo = localStorage.getItem("codigoVerificacion");

  try {
    const response = await fetch("http://localhost:3000/auth/restablecer-contrasena", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        nuevaContrasena
      }),
    });

    const data = await response.json();

    if (response.ok) {
      displayMessage(messageDiv, data.message, 'success-message');
      
      localStorage.removeItem("emailRecuperacion");
      localStorage.removeItem("codigoVerificacion");

      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } else {
      displayMessage(messageDiv, data.message, 'error-message');
    }
  } catch (error) {
    console.error("Error al cambiar la contraseña:", error);
    displayMessage(messageDiv, 'Error al cambiar la contraseña, intente de nuevo más tarde.', 'error-message');
  }
});

function clearMessages(messageDiv) {
  messageDiv.textContent = '';
  messageDiv.classList.remove('error-message', 'success-message');
}

function displayMessage(messageDiv, text, className) {
  messageDiv.textContent = text;
  messageDiv.classList.add(className);
}
