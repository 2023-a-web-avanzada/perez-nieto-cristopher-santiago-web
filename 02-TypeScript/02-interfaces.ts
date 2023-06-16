// 02-interfaces
export class A implements B{
    apellido: string;
    edad = '';
    nombre = 'a';
}
export interface B{
    nombre: string; // nombre: string,
    apellido: string; // edad: number,
}

export type C = {
    nombre: String;
    edad: number;
}

type Usuario = {
    nombre: string;
    apellido: string;
    edad?: number | undefined; //opcional
    sueldo?: number; // opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    // funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => 'AP' | 'AF' | 'AT'; //opcional
    // calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    // estadoActual no recibe parámetros
}


let user: Usuario = {
    nombre: 'Adrian',
    apellido: 'Eguez',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        return user.sueldo + user.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (user.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}