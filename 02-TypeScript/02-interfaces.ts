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
    sueldo?; number; // opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    // funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => 'AP' | 'AF' | 'AT'; //opcional

}


