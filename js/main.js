// Función para calcular el pago mensual del préstamo
function calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoMeses) {
    const tasaInteresMensual = tasaInteresAnual / (12 * 100);

    const pagoMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoMeses));

    return pagoMensual.toFixed(2);
}
calcularPagoMensual()

// Crear un objeto para almacenar la información del préstamo
const prestamo = {
    monto: 0,
    tasa: 0,
    plazo: 0,
    pagoMensual: 0
};

// Crear un array para almacenar los mensajes de validación
const mensajesValidacion = [];

// Pedir al usuario los datos del préstamo
prestamo.monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
prestamo.tasa = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
prestamo.plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));

// Validar los datos ingresados
if (isNaN(prestamo.monto) || prestamo.monto <= 0) {
    mensajesValidacion.push("Por favor, ingrese un monto válido mayor que cero.");
}

if (isNaN(prestamo.tasa) || prestamo.tasa <= 0) {
    mensajesValidacion.push("Por favor, ingrese una tasa de interés válida mayor que cero.");
}

if (isNaN(prestamo.plazo) || prestamo.plazo <= 0) {
    mensajesValidacion.push("Por favor, ingrese un plazo válido mayor que cero.");
}

if (mensajesValidacion.length > 0) {
    for (const mensaje of mensajesValidacion) {
        console.log(mensaje);
    }
} else {
    // Calcular el pago mensual usando la función
    prestamo.pagoMensual = calcularPagoMensual(prestamo.monto, prestamo.tasa, prestamo.plazo);

    // Mostrar los resultados
    console.log(`Monto del préstamo: $${prestamo.monto}`);
    console.log(`Tasa de interés anual: ${prestamo.tasa}%`);
    console.log(`Plazo del préstamo: ${prestamo.plazo} meses`);
    console.log(`Pago mensual: $${prestamo.pagoMensual}`);

    // Mostrar los resultados en un alert
    alert(`Monto del préstamo: $${prestamo.monto}\nTasa de interés anual: ${prestamo.tasa}%\nPlazo del préstamo: ${prestamo.plazo} meses\nPago mensual: $${prestamo.pagoMensual}`);
}

// Pedir al usuario los datos del préstamo y validar que sean números válidos
const montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
const tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
const plazoMeses = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));

// Validar que los datos ingresados sean números válidos
if (isNaN(montoPrestamo) || isNaN(tasaInteresAnual) || isNaN(plazoMeses) || montoPrestamo <= 0 || tasaInteresAnual <= 0 || plazoMeses <= 0) {
    console.log("Por favor, ingrese valores numéricos válidos y mayores que cero.");
} else {

    // Calcular el pago mensual usando la función

    const pagoMensual = calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoMeses);

    // Mostrar los resultados

    console.log(`Monto del préstamo: $${montoPrestamo}`);

    console.log(`Tasa de interés anual: ${tasaInteresAnual}%`);

    console.log(`Plazo del préstamo: ${plazoMeses} meses`);

    console.log(`Pago mensual: $${pagoMensual}`);

    // Mostrar los resultados en un alert
    alert(`Monto del préstamo: $${montoPrestamo}\nTasa de interés anual: ${tasaInteresAnual}%\nPlazo del préstamo: ${plazoMeses} meses\nPago mensual: $${pagoMensual}`);
}

// Mostrar los resultados en un alert después de confirmación
const confirmacion = prompt("¿Desea volver a la simulacion? (Sí/No)").toLowerCase();

if (confirmacion === "si" || confirmacion === "sí") {
    
   
const alertMessage = `Monto del préstamo: $${montoPrestamo}\nTasa de interés anual: ${tasaInteresAnual}%\nPlazo del préstamo: ${plazoMeses} meses\nPago mensual: $${pagoMensual}`;
    
    alert
alert(alertMessage);
} 

else {
    
   
console.log("Resultados no mostrados en el alert.");
}