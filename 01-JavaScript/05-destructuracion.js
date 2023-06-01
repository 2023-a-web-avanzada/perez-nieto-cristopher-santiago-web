// 05-destructuracion.js
const adrian = {
    nombre: "Adrian",
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez",
};
const adrianCarolina = { // Crea una nueva referencia (valor)
    ...carolina,                                // 1 el ordes es importante para propiedades que se repiten
    ...adrian,                                  // El ultimo reemplaza a los anteriores
};
console.log('adrianCarolina', adrianCarolina)

// Destructuración de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno, // El orden importa
    ...arregloDos,
];  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('superArreglo', superArreglo);

