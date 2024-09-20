let timeoutID;

const tiempoInactividad = 5 * 60 * 1000; // 5 minutos

// Función usuario inactivo
function redirigirAlLogin() {
    window.location.href = '/'; 
}

// Función para reiniciar el temporizador de inactividad
function reiniciarTemporizador() {
    // Limpia el temporizador anterior
    clearTimeout(timeoutID);

    // Nuevo temporizador
    timeoutID = setTimeout(redirigirAlLogin, tiempoInactividad);
}

// Detectar eventos de actividad del usuario
window.onload = reiniciarTemporizador;
window.onmousemove = reiniciarTemporizador;
window.onkeydown = reiniciarTemporizador;
window.onclick = reiniciarTemporizador;
window.onscroll = reiniciarTemporizador;

