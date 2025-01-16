// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: Concatenar nombres: Dado un array de nombres, usa forEach para 
//concatenar todos los nombres en una sola cadena, separados por comas, y luego imprime 
// la cadena resultante.

const nombres = ['Ana', 'Carlos', 'Beatriz', 'David', 'Elena'];
let cadenaConcatenada = '';

nombres.forEach(function(nombre, indice) {
    cadenaConcatenada += nombre;
    if (indice < nombres.length - 1) {
        cadenaConcatenada += ', ';
    }
});

console.log('Nombres concatenados:', cadenaConcatenada);