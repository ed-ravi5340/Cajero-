
// arreglo de cuentas con nombre, saldo y contraseña
var cuentas = [
    { nombre: "Mali", saldo: 200, password: "mali2" },
    { nombre: "Gera", saldo: 290, password: "gera2" },
    { nombre: "Maui", saldo: 67, password: "maui2" }
];

// Agrega un evento 'submit' al formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Evitar el envío del formulario por defecto
    event.preventDefault();

    // Obtener los valores de usuario y contraseña
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    // Realizar la validación de contraseña
    if (cuentas[usuario] === password) {
        // Contraseña correcta, redirige al usuario a la siguiente página
        window.location.href = "siguiente-pagina.html";
    } else {
        // Contraseña incorrecta, notificar al usuario y permitir otro intento
        alert("Contraseña incorrecta. Inténtelo nuevamente.");
        // Limpia el campo de contraseña para un nuevo intento
        document.getElementById("password").value = "";
    }
});

// Función para mostrar las opciones disponibles después de iniciar sesión
function mostrarOpciones(cuenta) {
    var opcion = prompt("Selecciona una opción:\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto\n4. Salir");

    switch (opcion) {
        case "1":
            alert("Su saldo es: $" + cuenta.saldo);
            mostrarOpciones(cuenta);
            break;
        case "2":
            var montoIngresado = parseFloat(prompt("Ingrese el monto a ingresar:"));
            if (!isNaN(montoIngresado) && montoIngresado > 0 && montoIngresado <= 990) {
                cuenta.saldo += montoIngresado;
                alert("Monto ingresado con éxito. Su nuevo saldo es: $" + cuenta.saldo);
            } else {
                alert("Monto inválido o excede el límite de $990. Inténtelo nuevamente.");
            }
            mostrarOpciones(cuenta);
            break;
        case "3":
            var montoRetirar = parseFloat(prompt("Ingrese el monto a retirar:"));
            if (!isNaN(montoRetirar) && montoRetirar > 0 && montoRetirar <= cuenta.saldo && cuenta.saldo - montoRetirar >= 10) {
                cuenta.saldo -= montoRetirar;
                alert("Monto retirado con éxito. Su nuevo saldo es: $" + cuenta.saldo);
            } else {
                alert("Monto inválido o excede el límite de $990 o deja menos de $10 en la cuenta. Inténtalo nuevamente.");
            }
            mostrarOpciones(cuenta);
            break;
        case "4":
            alert("Su sesión ha finalizado. Gracias por su preferencia.");
            break;
        default:
            alert("Opción inválida. Inténtalo nuevamente.");
            mostrarOpciones(cuenta);
            break;
    }
}



function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes;
    document.getElementById('clockDisplay').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock
updateClock();