// 04-funciones.js
function soloNumero(a, b, c){
    return a - b + c; // valor a devolver
}
// JS permite el uso de funciones sin validaciones
// soloNumeros('v', true, [1,2,3]);
// soloNumeros((a) => a, (a) => a, (a) => a);
// soloNumeros(1,2,3,4,5,6,7,8,9);
// soloNumeros();
function soloLetras(a, b, c) { // Sin return devolvemos: undefined
    console.log(a, b, c);
}

// TIPOS DE FUNCIONES
// Funciones nombreadas - named functions
function funcionNombreada(){
}
// Funciones anónimas - Anonymous Functions
const funcionSinNombre1 = function () {};
var funcionsinNombre2 = function () {};
let funcionSinNombre3 = function () {};

[].forEach(function (){});
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();
// FAT ARROW > ANONYMOOUS
// Funciones anónimas - Fat Arrow Functions
const funcionFatArrow1 = () => {}; // -> =>
let funcionFatArrow2 = () => {}; // -> =>
var funcionFatArrow3 = () => {}; // -> =>
[].forEach(() => {})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (parametro) => {
    return parametro + 1;
}
const funcionArrow6 = (parametro) => parametro + 1; // Una sola línea, Omitio Return, Omitio llaves
const funcionArrow8 = parametro => parametro + 1; // SOLO si tenemos 1 parametro
                                                  // Omitimos parentesis
const funcionFatArrow8 = (numUno, numDos, numTres) => numUno + numDos + numTres;

//... => parametros infinitos => Llegan en un arreglo de parametros
//       solo podemos tener un parametro infinito por funcion
// function sumarNumeros(a,b,c,s,w, ...TodosNumeros OK
// function sumarNumeros(... todosNumeros, ...todosNumeros2) BAD
// function sumerNumeros(... todosNumeros, ... todosNuermos2) BAD
function sumarNumeros (...todosNumeros){
    let total = 0;
    todosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    // return todosNumeros.reduce((a, y) => a + v, 0);
}

sumarNumeros(1,2,3,4,6,7,5,4,3,2,1);


