// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: 

let numeros = [3, -7, 5, -2, -9, 8, -4];
let numerosNegativos = 0;

numeros.forEach(function(numero) {
    if (numero < 0) {
        numerosNegativos += numero;
    }

});
console.log("La suma total de los numeros negativos es: ", numerosNegativos);