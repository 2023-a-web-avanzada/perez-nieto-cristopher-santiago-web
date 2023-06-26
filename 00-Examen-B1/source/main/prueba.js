
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
    ) {
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.duracion = duracion;
        this.esExplicita = esExplicita;
    }
    buscarCancionPorID(idCancion) {
        return new Promise((resolve, reject) => {
            let cancionEncontrada = new Cancion();
            fs.readFile(
                './canciones.txt',
                'utf-8',
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        console.error(errorLectura);
                        reject('Error al leer el archivo');
                    } else {
                        const lineas = contenido.split("\n");
                        console.log("LÍNEAS DEL ARCHIVO", lineas);
                        lineas.forEach(
                            function (linea) {
                                const atributos = linea.split(",")
                                console.log('ATRIBUTOS DE LA LINEA', atributos);
                                if (parseInt(atributos[0]) === idCancion) {
                                    console.log("EL ID ACTUAL ES:", atributos[0]);
                                    cancionEncontrada.id = parseInt(atributos[0]);
                                    cancionEncontrada.nombre = atributos[1];
                                    cancionEncontrada.autor = atributos[2];
                                    cancionEncontrada.fechaLanzamiento = atributos[3];
                                    cancionEncontrada.duracion = parseFloat(atributos[4]);
                                    cancionEncontrada.esExplicita = atributos[5] === 'true';
                                }
                            }
                        )
                        resolve(cancionEncontrada);
                    }
                }
            );
        })
    }
    obtenerCanciones() {
        let arregloCanciones = [];
        let cancion = new Cancion;
        fs.readFile(
            './canciones.txt',
            'utf-8',
            (errorLectura, contenido) => {
                if (errorLectura) {
                    console.error(errorLectura);
                    throw new Error('Error al leer el archivo');
                } else {
                    const lineas = contenido.split("\n");
                    lineas.forEach(
                        function (textoCancion) {
                            const atributos = textoCancion.split(",")
                            cancion.id = atributos[0];
                            cancion.nombre = atributos[1];
                            cancion.autor = atributos[2];
                            cancion.fechaLanzamiento = atributos[3];
                            cancion.duracion = atributos[4];
                            cancion.esExplicita = atributos[5];
                            arregloCanciones.push(cancion);
                        }
                    )
                }
            }
        );
        return arregloCanciones;
    }
    insertarCancionesDeArreglo(listaCanciones){
        listaCanciones.forEach(
            function (cancion) {
                const cancionCadena =
                    cancion.id + ',' +
                    cancion.nombre + ',' +
                    cancion.autor + ',' +
                    cancion.fechaLanzamiento + ',' +
                    cancion.duracion + ',' +
                    cancion.esExplicita;
                const nuevoContenido = cancionCadena + '\n';
                fs.writeFile(
                    'canciones.txt',
                    nuevoContenido,
                    'utf-8',
                    (error) => {
                        if (error) {
                            console.error(error);
                        }
                    }
                );
            }
        )
    }
    leerCanciones() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                './canciones.txt',
                'utf-8',
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        console.error(errorLectura);
                        reject('Error al leer el archivo');
                    } else {
                        resolve(contenido);
                    }
                }
            );
        })
    }
    anadirCancion(id, nombre, autor, fecha, duracion, esExplicita) {
        return new Promise ((resolve, reject) => {
            const cancionNueva = new Cancion(
                id,
                nombre,
                autor,
                fecha,
                duracion,
                esExplicita,
            );
            const cancionCadena =
                cancionNueva.id + ',' +
                cancionNueva.nombre + ',' +
                cancionNueva.autor + ',' +
                cancionNueva.fechaLanzamiento + ',' +
                cancionNueva.duracion + ',' +
                cancionNueva.esExplicita;
            //console.log("Esta es mi NUEVA CADENA:", cancionNueva.nombre+cancionNueva.autor);
            fs.readFile(
                './canciones.txt',
                'utf-8',
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        console.error(errorLectura);
                        reject('Error al leer el archivo');
                    }
                    const nuevoContenido = contenido + cancionCadena + '\n';
                    fs.writeFile(
                        'canciones.txt',
                        nuevoContenido,
                        'utf-8',
                        (error) => {
                            if (error) {
                                console.error(error);
                                reject('Error al añadir canción');
                            } else {
                                console.log('Cancion registrada Exitosamente!');
                                resolve(cancionCadena);
                            }
                        }
                    );
                }
            );
        })
    }
    actualizaCancion(idCancion,
                     nuevoNombre,
                     nuevoAutor,
                     nuevaFecha,
                     nuevaDuracion,
                     nuevoEsExplicita) {
        return new Promise((resolve, reject) => {
            const cancionAActualizar = this.buscarCancionPorID(idCancion);
            const indiceCancion = listaCanciones.indexOf(cancionAActualizar);
            const listaCanciones = this.obtenerCanciones();
            cancionAActualizar.nombre = nuevoNombre;
            cancionAActualizar.autor = nuevoAutor;
            cancionAActualizar.fechaLanzamiento = nuevaFecha;
            cancionAActualizar.duracion = nuevaDuracion;
            cancionAActualizar.esExplicita = nuevoEsExplicita;
            listaCanciones.splice(indiceCancion, 1, cancionAActualizar);
            this.insertarCancionesDeArreglo(listaCanciones);
        })

    }
    eliminarCancion(idCancion) {
        const can = new Cancion();
        let cancionAEliminar = new Cancion();
        return new Promise((resolve, reject) => {
            can.eliminarCancion()
                .then((cancionEncontrada)=>{
                    cancionAEliminar = cancionEncontrada;
                })
                .catch((error)=>{
                    console.error(error);
                })
            console.log("ENCONTRÉ LA CANCIÓN", cancionAEliminar);
            const listaCanciones = this.obtenerCanciones();
            const indiceCancion = listaCanciones.indexOf(cancionAEliminar);
            listaCanciones.splice(indiceCancion, 1);
            this.insertarCancionesDeArreglo(listaCanciones);
            resolve(cancionAEliminar);
        })
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
    ) {
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.duracion = duracion;
        this.esLanzamiento = esLanzamiento;
        this.canciones = [];
    }
}

function main() {
    const miCancion = new Cancion();
    miCancion.leerCanciones()
        .then((contenidoArchivo) => {
            console.log('El contenido del archivo es: ', contenidoArchivo);
            miCancion.anadirCancion(
                2,
                'Yonaguni',
                'Bad',
                '25/07/2021',
                3.00,
                true
            )
                .then((cancionAnadida) => {
                    console.log('La cancion anadida es:',cancionAnadida);
                    miCancion.leerCanciones()
                        .then((contenidoNuevo) => {
                            console.log("El contenido del erchivo nuevo es:", contenidoNuevo)
                        })
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .then(() => {
           console.log('llego');
            /!*miCancion.eliminarCancion(1)
                .then(()=>{
                    console.log("Cancion Eliminada con exito");
                })
                .catch((error) => {
                    console.error(error);
                })
        })
        .catch((error) => {
            console.log(error);
        })
miCancion.eliminarCancion('1')
    .then((cancionEliminada)=>{
        console.log("Canción "+cancionEliminada+" eliminada exitosamente");
    });
}

main();

miCancion.anadirCancion(
    1,
    '25/8',
    'Bad Bunny',
    new Date(),
    3.00,
    true);
console.log('Mi archivo después de añadir la canción');
miCancion.leerCanciones();
//console.log(miCancion);

const miAlbum = new Album(
    1,
    'YHLQMDLAG',
    'Bad Bunny',
    new Date(),
    25,
    true,
)
miAlbum.canciones = [miCancion];
//console.log(miAlbum);
