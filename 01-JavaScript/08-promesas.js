// 08-promesas.js
const fs = require('fs');
/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y anadir el
* "contenidoArchivo" a ese archivo.
*/
function leerArchivo(path){
    return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (errorLectura, contenido) => {
                if (errorLectura){
                    console.error(errorLectura);
                    reject('Error leyendo primer archivo');
                } else {
                    resolve(contenido);
                }
            });
        }
    );
}
function escribirArchivo(path, contenido){
    return new Promise((resolve, reject) => {
        fs.writeFile(path, contenido, 'utf-8', (error) => {
            if (error) {
                console.log(error);
            }
        })
    })
}

/*leerArchivo('06-ejemplo.txt')
    .then((data)=>{
        console.log(data);
    })
    .catch((error) => {
        console.log('Error: ', error)
    })
    .finally(()=>{
        console.log('');
    });*/

/*escribirArchivo('08-prueba.txt', 'hola a todos')
    .then((data) => {
        console.log(data);
    })*/

function ejercicio(pathArchivo1, pathArchivo2, pathArchivoNuevo){
    let contenidoTotal = '';
    leerArchivo(pathArchivo1)
        .then((contenidoPrimerArchivo) => {
            contenidoTotal = contenidoTotal + contenidoPrimerArchivo;
            return leerArchivo(pathArchivo2);
        })
        .then((contenidoSegundoArchivo) => {
            contenidoTotal = contenidoTotal + '\n' + contenidoSegundoArchivo;
            return escribirArchivo(pathArchivoNuevo, contenidoTotal);
        })
        .catch((error) => {
            console.error(error);
        });

}

ejercicio('08-prueba.txt','01-variables.js','08-prueba.txt');

// REGLAS:
// 1) Estar dentro de una función (nombrada o anónima)
// 2) AGREGAR la palabra 'async' antes de la declaración de la función
// 3) AGREGAR la palabra 'await' antes de la declaración de la promesa
// const a = async function(){}
// const a = async () => {}

async function ejecicioConAwait(){
    const pathUno = '08-prueba.txt';
    const pathDos = '01-variables.js';
    const pathTres = '08-prueba.txt';
    try{
        const contenidoUno = await leerArchivo(pathUno);
        const contenidoDos = await leerArchivo(pathDos);
        const contenidoTotal = contenidoUno + contenidoDos;
        await escribirArchivo(pathTres, contenidoTotal);
    }catch (error) {
        console.error(error);
    }
}