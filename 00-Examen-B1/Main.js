const fs = require('fs'); //file system
// Importar modulo fs
class Cancion {
    constructor(
        id,
        nombre,
        autor,
        fechaLanzamiento,
        duracion,
        esExplicita,
    ){
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.duracion = duracion;
        this.esExplicita = esExplicita;
    }
    leerCanciones(){
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
        );
    }

    anadirCancion(id, nombre, autor, fecha, duracion, esExplicita){
        const cancionNueva = new Cancion(
            id,
            nombre,
            autor,
            fecha,
            duracion,
            esExplicita,
        );
        console.log("Esta es mi NUEVA CADENA:", cancionNueva.nombre+cancionNueva.autor);
        fs.readFile(
            './canciones.txt',
            'utf-8',
            (errorLectura, contenido) => {
                if(errorLectura){
                    console.error(errorLectura);
                    throw new Error('Error al leer el archivo');
                }
                const nuevoContenido = contenido + cancionNueva.toString();
                fs.writeFile(
                    'canciones.txt',
                    nuevoContenido,
                    'utf-8',
                    (error) => {
                        if (error) {
                            console.error(error);
                        } else {
                            console.log('Cancion registrada Exitosamente!');
                        }
                    }
                );
            }
        );
    }
}

class Album {
    constructor(
        id,
        nombre,
        autor,
        fechaLanzamiento,
        duracion,
        esLanzamiento,
    ){
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.duracion = duracion;
        this.esLanzamiento = esLanzamiento;
        this.canciones = [];
    }
}

const miCancion = new Cancion();
console.log('Estas canciones están en el archivo canciones.txt:');
miCancion.leerCanciones();
console.log('Se procede a añadir una canción');
miCancion.anadirCancion(
    '25/8',
    'Bad Bunny',
    new Date(),
    3.00,
    true);
console.log('Mi archivo después de añadir la canción');
miCancion.leerCanciones();
//console.log(miCancion);

const miAlbum = new Album(
    'YHLQMDLAG',
    'Bad Bunny',
    new Date(),
    25,
    true,
)
miAlbum.canciones = [miCancion];
//console.log(miAlbum);