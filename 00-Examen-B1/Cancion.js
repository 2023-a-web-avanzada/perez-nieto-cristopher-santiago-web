/*export default class Cancion {
    constructor(
        nombre,
        autor,
        fechaLanzamiento,
        duracion,
        esExplicita,
    ){
        this.nombre = nombre;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.duracion = duracion;
        this.esExplicita = esExplicita;
    }

    function listarCanciones(nombre, autor, fecha, duracion, esExplicita){
        fs.readFile(
            './canciones.txt',
            'utf-8',
            (errorLectura, contenido) => {
                if(errorLectura){
                    console.error(errorLectura);
                    throw new Error('Error al leer el archivo');
                } else {
                    console.log(contenido);
                }
            }
        )
    };
}
*/