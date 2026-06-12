const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();

    // Expresiones regulares
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,40}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^3\d{9}$/;
    const regexCiudad = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,30}$/;

    if (
        !regexNombre.test(nombre) ||
        !regexCorreo.test(correo) ||
        !regexTelefono.test(telefono) ||
        !regexCiudad.test(ciudad)
    ) {
        alert("Verifica los datos ingresados.");
        return;
    }

    const usuario = {
        nombre,
        correo,
        telefono,
        ciudad
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    window.location.href = "usuarios.html";
});