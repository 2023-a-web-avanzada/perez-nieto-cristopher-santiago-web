// 04-clases.ts
class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencia: string = 'Humano';
    protected nombreYApellido = ''; // Duck Typing -> string
    constructor(nombreParam: string, apellidoParam: string) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.nombreYApellido = nombreParam + ' ' + apellidoParam;
    }

    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {
    constructor(nombreParam: string,   // Parametros del constructor
                apellidoParam: string, // Parametros del constructor
                public cedula: string, // Modificador de acceso -> propiedad de la clase
                public estadoCivil: string ) { // Modificador de acceso -> propiedad de la clase
        super(nombreParam, apellidoParam);
        this.cedula;
        this.estadoCivil;
    }
}

const adrian = new Usuario('Adrian',
                                   'Eguez',
                                        '1718137159',
                                     'casado');

adrian.nombre;
adrian.apellido;
adrian.cedula; //1718137159
adrian.estadoCivil; // casado



