"use strict";
exports.__esModule = true;
exports.A = void 0;
// 02-interfaces
var A = /** @class */ (function () {
    function A() {
        this.edad = '';
        this.nombre = 'a';
    }
    return A;
}());
exports.A = A;
var user = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return user.sueldo + user.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (user.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
