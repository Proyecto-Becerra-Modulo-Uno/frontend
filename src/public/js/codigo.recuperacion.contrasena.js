document.getElementById("submitBtn").addEventListener("click", async (event) => {
    event.preventDefault(); 

    const codigo = document.getElementById("codigo").value;
    const email = localStorage.getItem("emailRecuperacion");
    const messageDiv = document.getElementById("message");

    clearMessages(messageDiv);

    if (!codigo) {
        displayMessage(messageDiv, 'Por favor, complete el campo del código.', 'error-message');
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/auth/verificar-codigo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, codigo }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("codigoVerificacion", codigo);
            displayMessage(messageDiv, data.message, 'success-message');
            setTimeout(() => {
                window.location.href = '/nuevaClave';
            }, 2000);
        } else {
            displayMessage(messageDiv, data.message, 'error-message');
        }
    } catch (error) {
        displayMessage(messageDiv, 'Error al verificar el código.', 'error-message');
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
