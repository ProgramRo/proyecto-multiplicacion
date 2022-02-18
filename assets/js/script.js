const funcionMultiplica = () => {
    // Se piden datos de entrada
    let n1 = prompt("Ingrese el número a operar entre 1 y 20:");
    n1 = parseInt(n1);
    if(n1 <= 20) {
        // Realizar las operaciones
        // Se entrega el resultado de la multiplicación
        for (let i = 1; i <= n1; i++) {
            let resultado = n1 * i;
            console.log(`${n1} x ${i} = ${resultado}\n`);
        }
        for (let i = 1; i <= n1; i++) {
            // Se entrega el factorial del número ingresado dentro del 'for anidado'
            let factorial = 1
            for (let j = 1; j <= i; j++) {
                factorial = factorial * j;
            }
            console.log(`El factorial de ${i} es: ${factorial}`);
        }
    }
    else {
        alert(`El número ingresado [${n1}] se encuentra fuera de rango`);
    }
}
// Se llama la función
funcionMultiplica ();