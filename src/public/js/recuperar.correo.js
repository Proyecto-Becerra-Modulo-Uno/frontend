document.getElementById("sendEmailBtn").addEventListener("click", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const messageDiv = document.getElementById("message");

  if (!email) {
    messageDiv.innerHTML = '<p class="error-message">Por favor, ingrese su correo.</p>';
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:3000/auth/solicitar-recuperacion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    messageDiv.classList.remove("error-message", "success-message");
  
    if (response.ok) {
      messageDiv.textContent = data.message;
      messageDiv.classList.add("success-message");

      localStorage.setItem("emailRecuperacion", email);

      setTimeout(() => {
        window.location.href = '/codigoRecuperacion';
      }, 2000);
    } else {
      messageDiv.textContent = data.message;
      messageDiv.classList.add("error-message");
    }
  } catch (error) {
    console.error("Error al enviar la solicitud", error);
    messageDiv.textContent = "Error al enviar la solicitud, intente de nuevo más tarde.";
    messageDiv.classList.add("error-message");
  }
});
