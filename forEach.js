// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: Duplicar cada número: Usa forEach para recorrer un array de números 
// y crea un nuevo array que contenga cada número duplicado. Imprime el nuevo array

let numeros = [2, 4, 6, 8, 10];

let numerosDuplicados = [];

numeros.forEach(function(numero) {
    numerosDuplicados.push(numero * 2);
});
console.log("Array con numeros duplicados: ", numerosDuplicados);