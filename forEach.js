// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: Filtrar números pares: Escribe un programa que recorra un array 
// de números y use forEach para imprimir solo los números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach(function(numero) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
});