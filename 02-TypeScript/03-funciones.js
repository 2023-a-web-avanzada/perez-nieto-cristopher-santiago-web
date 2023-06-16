//03-funciones.ts
function sumarNumeros(numeroInicial) {
    var numerosInfinitos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosInfinitos[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}
function imprimir(mensaje) {
    console.log('Hola ' + mensaje ? mensaje : 'bienvenido');
}
imprimir('hala');
