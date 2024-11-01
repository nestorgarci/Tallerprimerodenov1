// Ejercicio 1: Verificación de Calificaciones
function verificarCalificacion() {
    let calificacion = parseInt(document.getElementById("calificacion").value);
    let resultado;

    if (calificacion >= 90) {
        resultado = "Aprobado con honores";
    } else if (calificacion >= 70) {
        resultado = "Aprobado";
    } else {
        resultado = "Reprobado";
    }

    document.getElementById("resultadoCalificacion").innerText = resultado;
}

// Ejercicio 2: Determinación de Número Par o Impar
function verificarParidad() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = numero % 2 === 0 ? "El número es par" : "El número es impar";
    document.getElementById("resultadoParidad").innerText = resultado;
}

// Ejercicio 3: Evaluación de Descuentos
function calcularDescuento() {
    let monto = parseFloat(document.getElementById("montoCompra").value);
    let descuento = monto > 100 ? monto * 0.10 : 0;
    let montoFinal = monto - descuento;
    
    let resultado = `Monto final a pagar: $${montoFinal.toFixed(2)}`;
    document.getElementById("resultadoDescuento").innerText = resultado;
}

// Ejercicio 4: Juego de Adivinanza de Números
function jugarAdivinanza() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let adivinanza = parseInt(document.getElementById("adivinanza").value);
    let resultado;

    if (adivinanza === numeroAleatorio) {
        resultado = "¡Felicidades, adivinaste el número!";
    } else {
        resultado = `Lo siento, el número era ${numeroAleatorio}`;
    }

    document.getElementById("resultadoAdivinanza").innerText = resultado;
}
