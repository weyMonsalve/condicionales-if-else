// Sintaxis Básica

// array.forEach(function(elemento) {
// Aquí haces algo con 'elemento'
// });

// Ejercicio: Convertir a mayúsculas: Crea un programa que tome un array de 
// cadenas de texto y use forEach para imprimir cada cadena en mayúsculas.

let palabras = ["hola", "casa", "carro", "futbol", "comida"];

palabras.forEach(function(cadena) {
    console.log(cadena.toUpperCase());
});