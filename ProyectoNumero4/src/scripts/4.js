
function sumarArreglo() {
    const numeros = document.getElementById("numeros").value.split(',').map(Number);
    let suma = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    
    const promedio = suma / numeros.length;
    document.getElementById("resultadoSuma").innerText = `Suma total: ${suma}, Promedio: ${promedio}`;
}

function ingresarNumeros() {
    let numero = parseInt(prompt("Ingresa un número (un número negativo para salir):"));
    let mensaje = "Números ingresados: ";
    
    while (numero >= 0) {
        mensaje += `${numero} `;
        numero = parseInt(prompt("Ingresa otro número (un número negativo para salir):"));
    }
    
    document.getElementById("resultadoWhile").innerText = mensaje;
}

function verificarContrasena() {
    let contrasena;
    const contrasenaCorrecta = "1234";
    
    do {
        contrasena = prompt("Ingresa la contraseña:");
    } while (contrasena !== contrasenaCorrecta);
    
    document.getElementById("resultadoDoWhile").innerText = "¡Contraseña correcta!";
}
