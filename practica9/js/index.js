let estado = document.getElementById("estado");
// Guanajuato por defecto
estado.value = 11;

let fecha = document.getElementById("fecha");
let hoy = new Date();
let fechaCadena = hoy.toISOString().slice(0, 10);
fecha.value = fechaCadena;

// Validar contraseñas
let btnRegistrar = document.getElementById("btnRegistrar");

btnRegistrar.addEventListener("click", function (e) {
    e.preventDefault(); // evita que se envíe el formulario sin validar
    
    let pass1 = document.getElementById("contrasena1").value;
    let pass2 = document.getElementById("contrasena2").value;

    // Expresión regular: mínimo 8 caracteres, al menos una mayúscula, un número y sin espacios
    let regex = /^(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;

    if (!regex.test(pass1)) {
        alert("La contraseña debe tener mínimo 8 caracteres, al menos una letra mayúscula, un número y no contener espacios.");
        return;
    }

    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Registro exitoso");
    // aquí ya podrías enviar el formulario
});
