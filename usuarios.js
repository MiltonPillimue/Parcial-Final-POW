const tabla = document.getElementById("tablaUsuarios");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

usuarios.forEach(usuario => {

    tabla.innerHTML += `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.ciudad}</td>
        </tr>
    `;

});