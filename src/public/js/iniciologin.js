const login = async () => {
    const usuario = document.getElementById("usuario").value
    const contrasena = document.getElementById("contrasena").value
    const url = document.getElementById("url").value

    sessionStorage.setItem("urlApex", process.env.BACKEND_URL)
    const urlApex = sessionStorage.getItem("urlApex") + "/users/login"
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre_usuario: usuario,
            contrasena_hash:  contrasena
        })
    }
    try {
        const response = await fetch(urlApex, options)
        const data = await response.json()
        if (data.error) {
            Swal.fire({
                title: "Custom width, padding, color, background.",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              });
        }else{
            sessionStorage.setItem("token", data.body.token)
        }
    } catch (err) {
        console.error("Se ha presentado un problema", err);
    }
}