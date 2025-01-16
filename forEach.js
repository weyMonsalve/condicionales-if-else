// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: Calcular el promedio: Escribe un programa que recorra un array de números, 
// sume todos los valores, y luego calcule el promedio. Imprime el promedio al final.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;

numeros.forEach(function(numero) {
    suma += numero;
});
const promedio = suma / numeros.length;

console.log('El promedio es:', promedio);