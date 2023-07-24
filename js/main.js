// Función para calcular el pago mensual del préstamo
function calcularPagoMensual(montoPrestamo, tasaInteresAnual, plazoMeses) {
    const tasaInteresMensual = tasaInteresAnual / (12 * 100);

    const pagoMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoMeses));

    return pagoMensual.toFixed(2);
}
calcularPagoMensual()

// Pedir al usuario los datos del préstamo
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
