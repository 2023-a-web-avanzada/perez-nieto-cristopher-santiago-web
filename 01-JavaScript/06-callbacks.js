const fs = require('fs'); //file system
                         // Importar modulo fs

console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8',            // Codificación
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('SEGUNDO');
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo primer archivo');
        } else {
            fs.readFile(
                './01.variables.js', // Nombre o path del archivo
                'utf-8',             // Codificación
                (errorLecturaPrimerArchivo, contenidoSegundoArchivo) => {
                })
        }
    }
);
console.log('TERCERO');


// 06-ejemlpo.txt -> Hola

// 1) Leer archivo: 06-ejemplo.txt,
// luego imprimir en consola
// 2) Desíés del paso 1, leer archivo: 01-variables.js
// , luego imprimir en consola
// 3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt
// con el contenido de los otros dos archivos.

const nuevoContenido = 1;
fs.writeFile(
    './06-nuevo-archivo.txt',
    nuevoContenido,
    (errorExritura) => {

    }
);

