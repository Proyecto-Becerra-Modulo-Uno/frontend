var modal = document.getElementById("questionModal");

var btn = document.querySelector(".button1");

var span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe o el enlace se siga
    modal.style.display = "block";
});

span.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

});

