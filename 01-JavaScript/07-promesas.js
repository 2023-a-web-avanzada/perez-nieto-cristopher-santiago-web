// 07-promesas.js

const fs = require('fs');


function promesaEsPar(numero) { // f -> Promesa
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            if (numero % 2 === 0) {
                resolve(numero); // return (then)
            } else {
                reject(':( no es par'); /* throw (catch) */
            }
        }
    );
    return miPrimerPromesa;
}

function promesaElevarAlCuadrado(numero) {
    return new Promise((res) => res(Math.pow(numero, 2)));
}

promesaEsPar(4)
    .then((data) => { //try
        console.log('DATA', data); //4
        return promesaElevarAlCuadrado(data);
        }
    )
    .then((data) => {
        console.log('DATA', data); //16
        return promesaElevarAlCuadrado(data);
        }//try //16
    )
    .then((data) => {
            console.log('DATA', data); //16
        }//try //256
    )
    .catch((error) => { //catch
        console.log('ERROR', error);
        }
    )
    .finally(() => { // finally
        console.log('Finally');
        }
    );