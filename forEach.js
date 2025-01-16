// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: Contar palabras largas: Crea un programa que recorra un array de palabras y 
//cuente cuántas palabras tienen más de 5 letras. Imprime el total.

const palabras = ['elefante', 'casa', 'extraordinario', 'sol', 'mariposa'];

let contador = 0;

palabras.forEach(function(palabra) {
    if (palabra.length > 5) {
        contador++;
    }
});

console.log('Número de palabras con más de 5 letras:', contador);