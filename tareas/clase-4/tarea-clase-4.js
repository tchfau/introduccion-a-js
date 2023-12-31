// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function tarea1() {
    for (let i=3; i<=22; i+=3) {
        console.log(i);
    }
}


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function tarea2() {
    let numero = 10;

    while(numero >= 1) {
        console.log(numero);
        numero--;
    }
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

function tarea3() {
    function fizzbuzz(limite) {
        for (let i=0; i<=limite; i++) {
            let mensaje='';
            if(i%3 === 0) {
                mensaje = 'Fizz';
            }
    
            if(i%5 === 0) {
                mensaje += 'Buzz';
            }
            console.log(mensaje || i);
        }  
    }
    fizzbuzz(50);
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function tarea4() {
    function calcularPromedio(numeros) {
        let suma = 0;
        for (let i=0; i<numeros.length; i++) {
            suma += numeros[i];
        }
        return suma / numeros.length;
    }
    console.log(calcularPromedio([10,5,4,2,8]));
}


tarea1();
tarea2();
tarea3();
tarea4();