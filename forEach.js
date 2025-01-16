// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: Generar un array de cuadrados: Dado un array de números, usa 
//forEach para crear un nuevo array que contenga el cuadrado de cada número del array original. 
//Imprime el nuevo array con los cuadrados.

let numeros = [2, 4, 6, 8, 10];
let cuadrados = [];

numeros.forEach(function(numero) {
    cuadrados.push(numero * numero);
});
console.log("numeros cuadrados: ", cuadrados);