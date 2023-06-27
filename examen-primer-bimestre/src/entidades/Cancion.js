import {createRequire} from 'module';
import {FileManager} from '../conexion/FileManager.js'
import {Album} from "./Album.js";

const path = '../conexion/albumes.txt'

const require = createRequire(import.meta.url);
const inquirer = require('inquirer');
const fileManager = new FileManager();
export class Cancion {
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

    async crearCancion() {
        const cancion = new Cancion();
        try {
            await inquirer
                .prompt([
                    {type: 'input', name: 'nombre', message: 'Ingresa el nombre de la canción: '},
                    {type: 'input', name: 'autor', message: 'Ingresa el autor de la canción: '},
                    {type: "input", name: "fechaLanzamiento", message: 'Ingresa la fecha de lanzamiento de la canción: '},
                    {type: "input", name: 'duracion', message: 'Ingresa la duración de la canción: '},
                    {type: 'input', name: 'esExplicita', message: '¿Tiene la canción contenido explicito?: Y / N: '}
                ]).then(datos => {
                    return new Promise(resolve => (
                        cancion.nombre = datos.nombre,
                            cancion.autor = datos.autor,
                            cancion.fechaLanzamiento = Date.parse(datos.fechaLanzamiento),
                            cancion.duracion = parseFloat(datos.fechaLanzamiento),
                            cancion.esExplicita = (datos.esExplicita === 'Y'),
                            resolve(cancion)
                    ));
                });
        } catch (error){
            console.error(error);
        }
        return cancion;
    }

    async editarCancion() {
        let cancionEditada = new Cancion();
        let nombre
        const canciones = [];

        await fileManager.leer(path).then(
            contenido => {
                console.log("Editar");
                let cancion = contenido;
                cancion.canciones.forEach(cancion => {
                    canciones.push(cancion);
                });
            }
        );
        console.log(canciones);
        const nombreCanciones = []
        canciones.forEach(cancion => {
            nombreCanciones.push(cancion.nombre)
        })
        try {
            nombre = await inquirer
                .prompt([
                    {
                        type: 'rawlist',
                        name: 'cancion',
                        message: '¿Qué canción desea editar?: ',
                        choices: nombreCanciones
                    }
                ]).then()

            console.log('Seleccionaste la cancióna ' + nombre.cancion)

            for (cancionEditada of canciones) {
                if (cancionEditada.nombre === nombre.jugador) {
                    try {
                        await inquirer
                            .prompt([
                                {type: 'input', name: 'nombre', message: 'Ingresa el nuevo nombre de la canción: '},
                                {type: 'input', name: 'autor', message: 'Ingresa el nuevo autor de la canción: '},
                                {type: "input", name: "fechaLanzamiento", message: 'Ingresa la nueva fecha de lanzamiento: '},
                                {type: "input", name: 'duracion', message: 'Ingresa la nueva duracion de la canción: ' },
                                {type: 'input', name: 'esExplicita', message: '¿La canción es explícita? Y / N: '}
                            ]).then(datos => {
                                return new Promise(resolve => (
                                    cancionEditada.nombre = datos.nombre,
                                        cancionEditada.autor = datos.autor,
                                        cancionEditada.fechaLanzamiento = Date.parse(datos.fechaLanzamiento),
                                        cancionEditada.duracion = parseFloat(datos.duracion),
                                        cancionEditada.esExplicita = (datos.esExplicita === 'Y'),
                                        resolve(cancionEditada)
                                ));
                            });
                    } catch (error) {
                        console.error(error);
                    }
                    break;
                }
            }
        } catch (error) {
            console.error(error);
        }
        return [nombre, cancionEditada];
    }

    async eliminarCancion() {
        let nombre
        const canciones = [];

        await fileManager.leer(path).then(
            contenido => {
                let album = contenido
                album.canciones.forEach(cancion => {
                    canciones.push(cancion);
                })
            }
        )
        console.log(canciones);
        const nombreCanciones = []
        canciones.forEach(cancion => {
            nombreCanciones.push(cancion.nombre)
        })
        try {
            nombre = await inquirer
                .prompt([
                    {
                        type: 'rawlist',
                        name: 'cancion',
                        message: '¿Qué canción desea eliminar?: ',
                        choices: nombreCanciones
                    }
                ]).then()
            console.log('Seleccionaste la canción: ' + nombre.cancion);

        } catch (error) {
            console.error(error);
        }
        return nombre;
    }
}
