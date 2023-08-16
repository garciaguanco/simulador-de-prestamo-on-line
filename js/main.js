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

// Pedir al usuario los datos del préstamo y validar que sean números válidos
prestamo.monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
prestamo.tasa = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
prestamo.plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));

// Validar que los datos ingresados  y generar mensajes de validación
const mensajesValidacion = [
    { condicion: isNaN(prestamo.monto) || prestamo.monto <= 0, mensaje: "Por favor, ingrese un monto válido mayor que cero. Error en monto" },
    { condicion: isNaN(prestamo.tasa) || prestamo.tasa <= 0, mensaje: "Por favor, ingrese una tasa de interés válida mayor que cero. Error en tasa" },
    { condicion: isNaN(prestamo.plazo) || prestamo.plazo <= 0, mensaje: "Por favor, ingrese un plazo válido mayor que cero. Error en plazo" }
];

// Filtrar mensajes de validación que sean verdaderos y mostrarlos
const mensajesMostrar = mensajesValidacion.filter(validacion => validacion.condicion).map(validacion => validacion.mensaje);
if (mensajesMostrar.length > 0) {
    mensajesMostrar.forEach(mensaje => console.log(mensaje));
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

// Mostrar los resultados en un alert después de confirmación
const confirmacion = prompt("¿Desea volver al simulador? (Sí/No)").toLowerCase();

if (confirmacion === "si" || confirmacion === "sí") {
    
   
const alertMessage = `Monto del préstamo: $${prestamo.monto}\nTasa de interés anual: ${prestamo.tasa}%\nPlazo del préstamo: ${prestamo.plazo} meses\nPago mensual: $${prestamo.pagoMensual}`;
    
    alert
alert(alertMessage);
} 

else {
    
   
console.log("Resultados no mostrados en el alert.");
}