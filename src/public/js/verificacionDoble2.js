document.getElementById('btnSiguiente1').addEventListener('click', async function() {
    const phoneNumberInput = document.getElementById('phoneNumberInput').value;
    
    let token = sessionStorage.getItem('token');

    try {
        // Realizar la solicitud al backend con el método PUT para actualizar el número de teléfono
        const updateResponse = await fetch('http://localhost:3000/update-phone', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token // Token JWT
            },
            body: JSON.stringify({ phoneNumber: phoneNumberInput })
        });

        const updateData = await updateResponse.json();

        if (updateResponse.ok) {
            alert("Número de teléfono actualizado correctamente.");

            // Realizar la solicitud para enviar el código de verificación
            const verificationResponse = await fetch('http://localhost:3000/auth/send-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token // Token JWT
                },
                body: JSON.stringify({ phoneNumber: phoneNumberInput })
            });

            const verificationData = await verificationResponse.json();

            if (verificationResponse.ok) {
                alert("Código de verificación enviado.");
                moverSlider(1); // Mueve el slider a la segunda pantalla
            } else {
                alert(`Error al enviar el código: ${verificationData.message}`);
            }
        } else {
            alert(`Error: ${updateData.body}`);
        }
    } catch (error) {
        console.error("Error al actualizar el teléfono:", error);
        alert("Hubo un problema al conectar con el servidor.");
    }
});

document.getElementById('btnReenviarCodigo').addEventListener('click', async function() {
    let token = sessionStorage.getItem('token');

    try {
        // Realizar la solicitud para volver a enviar el código de verificación
        const response = await fetch('http://localhost:3000/auth/send-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token // Token JWT
            }
        });

        const data = await response.json();

        if (response.ok) {
            alert("Código de verificación enviado nuevamente.");
        } else {
            alert(`Error al enviar el código: ${data.message}`);
        }
    } catch (error) {
        console.error("Error al enviar el código:", error);
        alert("Hubo un problema al conectar con el servidor.");
    }
});

document.getElementById('btnSiguiente2').addEventListener('click', async function() {
    const codeInput = document.getElementById('verificationCodeInput').value;
    let token = sessionStorage.getItem('token');

    try {
        // Realizar la solicitud para verificar el código
        const response = await fetch('http://localhost:3000/auth/verify-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token // Token JWT
            },
            body: JSON.stringify({ code: codeInput })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Código verificado correctamente.");
            moverSlider(2); // Mueve el slider a la tercera pantalla
        } else {
            alert(`Error al verificar el código: ${data.message}`);
        }
    } catch (error) {
        console.error("Error al verificar el código:", error);
        alert("Hubo un problema al conectar con el servidor.");
    }
});

document.getElementById('btnConfirmar').addEventListener('click', async function() {
    let token = sessionStorage.getItem('token');

    try {
        // Realizar la solicitud para confirmar la autenticación de dos pasos
        const response = await fetch('http://localhost:3000/auth/update-status-twuilio', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token // Token JWT
            },
            body: JSON.stringify({ id_admin: null }) // Aquí se puede ajustar según sea necesario
        });

        const data = await response.json();

        if (response.ok) {
            alert("Autenticación de dos pasos confirmada.");
            // Puedes agregar lógica aquí para redirigir al usuario o finalizar el proceso
        } else {
            alert(`Error al confirmar la autenticación: ${data.message}`);
        }
    } catch (error) {
        console.error("Error al confirmar la autenticación:", error);
        alert("Hubo un problema al conectar con el servidor.");
    }
});

document.getElementById('btnAtras1').addEventListener('click', function() {
    moverSlider(0); // Mueve el slider a la primera pantalla
});

function moverSlider(step) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${step * 100}%)`;
}
