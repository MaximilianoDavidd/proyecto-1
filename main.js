// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero";
    }
}

// Ciclo para permitir al usuario realizar múltiples operaciones
let continuar = true;

while (continuar) {
    // Solicitar al usuario que ingrese la operación y los operandos
    const operacion = prompt("Ingrese la operación (+, -, *, /) o 'salir' para terminar:");

    if (operacion.toLowerCase() === 'salir') {
        continuar = false;
        alert("¡Hasta luego!");
    } else if (operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/') {
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        // Realizar la operación según la elección del usuario
        let resultado;
        switch (operacion) {
            case '+':
                resultado = sumar(num1, num2);
                break;
            case '-':
                resultado = restar(num1, num2);
                break;
            case '*':
                resultado = multiplicar(num1, num2);
                break;
            case '/':
                resultado = dividir(num1, num2);
                break;
        }

        // Mostrar el resultado en una ventana emergente (alert)
        alert("Resultado: " + resultado);
    } else {
        alert("Operación no válida. Por favor, ingrese una operación válida (+, -, *, /) o 'salir'.");
    }
}