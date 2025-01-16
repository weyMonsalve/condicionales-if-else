// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Sumar todos los números en un array

let numeros = [1, 2, 3, 4, 5];
let suma = 0;

numeros.forEach(function(numero) {
    suma += numero;
});
console.log("La suma de los numeros del array es: " + suma);