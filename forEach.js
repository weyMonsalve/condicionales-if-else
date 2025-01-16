// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: Imprimir nombres con índice: Dado un array de nombres, utiliza 
// forEach para imprimir cada nombre junto con su posición en el array (índice).

let nombres = ["Andres", "Julio", "mauricio", "hector"];

nombres.forEach(function(nombre, indice) {
    console.log("nombre: " + nombre, "indice: " + indice);
});