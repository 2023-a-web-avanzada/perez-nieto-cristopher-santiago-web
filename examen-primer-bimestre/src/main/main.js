import {Album} from '../entidades/Album.js'
import {FileManager} from '../conexion/FileManager.js'
import {createRequire} from 'module';
import {Cancion} from "../entidades/Cancion.js";

const require = createRequire(import.meta.url);
const inquirer = require('inquirer');
const path = '../conexion/albumes.txt'

let fileManager = new FileManager()
let album = new Album()
let cancion = new Cancion()

const opcionesMenu = [
    'Listar Álbumes',
    'Crear nuevo Album',
    'Editar un Album',
    'Eliminar un Album',
    'Salir'
]

async function menu() {
    try {
        let opcion;
        do {
            opcion = await inquirer.prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: "=================== SPOTIFY TRUCHO ==============\n",
                    choices: opcionesMenu
                }
            ]).then()
            //listar
            if (opcion.opcion === opcionesMenu[0]) {
                await fileManager.leer(path).then(
                    data => {
                        console.log(data);
                    }
                )
            }
            //crear
            if (opcion.opcion === opcionesMenu[1]) {
                await album.crearAlbum()
                    .then(async album => {
                        /*let todoContenido = '';
                        await fileManager.leer(path).then(
                            data => {
                                todoContenido = todoContenido + data;
                            }
                        )*/
                        let numCanciones;
                        numCanciones = await inquirer.prompt([{
                            type: 'input',
                            name: 'num',
                            message: '¿Cuántas canciones tiene el album?: '
                        }]).then()
                        while (numCanciones.num > 0) {
                            console.log('Ingrese la informacion de la canción ' + numCanciones.num)
                            await cancion.crearCancion().then(
                                async cancion => {
                                    album.canciones.push(cancion);
                                    await fileManager.escribir(path, album);
                                }
                            )
                            numCanciones.num--;
                        }
                        await fileManager.escribir(path, album);
                        console.log("Album creado correctamente");
                        await fileManager.leer(path);
                    })
            }
            //editar
            if (opcion.opcion === opcionesMenu[2]) {
                let nombre
                const albumes = [];
                await fileManager.leer(path).then(
                    contenido => {
                        let album = contenido;
                        albumes.push(album);
                    })
                const nombresAlbumes = [];
                albumes.forEach(album => {
                    nombresAlbumes.push(album.nombre)
                })
                let albumEditado = new Album();
                try {
                    nombre = await inquirer
                        .prompt([
                            {
                                type: 'rawlist',
                                name: 'album',
                                message: '¿Qué album quiere editar?: ',
                                choices: nombresAlbumes
                            }
                        ]).then()
                    console.log('Seleccionaste el album: ' + nombre.album);
                } catch (error) {
                    console.error(error);
                }
                let respuesta = await inquirer.prompt([{
                    type: "rawlist",
                    name: "opcion",
                    message: "¿Qué deseas hacer?",
                    choices: ['Editar el album',
                        'Editar una canción',
                        'Agregar una canción',
                        'Eliminar una canción']
                }]).then()
                if (respuesta.opcion === 'Editar el album') {
                    let album;
                    const canciones = [];
                    await fileManager.leer(path).then(
                        contenido => {
                            album = contenido
                            album.canciones.forEach(cancion => {
                                canciones.push(cancion);
                            })
                        }
                    );
                    let albumEditado = await album.editarAlbum().then();
                    albumEditado.canciones = canciones;
                    await fileManager.escribir(path, albumEditado);
                    console.log('Album editado correctamente');
                }
                if (respuesta.opcion === 'Agregar una canción') {
                    let album;
                    const canciones = [];
                    await fileManager.leer(path).then(
                        contenido => {
                            album = contenido
                            album.canciones.forEach(cancion => {
                                canciones.push(cancion);
                            })
                        }
                    );
                    let nuevaCancion = await cancion.crearCancion().then();
                    canciones.push(nuevaCancion);
                    album.canciones = canciones;
                    await fileManager.escribir(path, album);
                    console.log('Canción agregada correctamente');
                }

                if (respuesta.opcion === 'Editar una canción') {
                    let album;
                    const canciones = [];
                    await fileManager.leer(path).then(
                        contenido => {
                            album = contenido
                            album.canciones.forEach(cancion => {
                                canciones.push(cancion)
                            })
                        }
                    )
                    let [nombre, cancionEditada] = await cancion.editarCancion().then();
                    const nombreAEliminar = Object.values(nombre)[0];
                    const cancionesEdit = canciones.filter((cancion) => cancion.nombre !== nombreAEliminar)

                    cancionesEdit.push(cancionEditada)
                    album.canciones = cancionesEdit;
                    await fileManager.escribir(path, album).then();
                    await fileManager.leer(path);
                    console.log('Canción editada correctamente');
                }

                if (respuesta.opcion === 'Eliminar una canción') {
                    let album;
                    const canciones = [];
                    await fileManager.leer(path).then(
                        contenido => {
                            album = contenido
                            album.canciones.forEach(cancion => {
                                canciones.push(cancion);
                            })
                        }
                    )
                    let nombre = await cancion.eliminarCancion().then()
                    const nombreAEliminar = Object.values(nombre)[0];
                    const cancionesEdit = canciones.filter((cancion) => cancion.nombre !== nombreAEliminar);
                    album.canciones = cancionesEdit;

                    await fileManager.escribir(path, album).then();
                    await fileManager.leer(path);
                    console.log('Canción eliminada correctamente');
                }
            }
            // Eliminar
            if (opcion.opcion === opcionesMenu[3]) {
                await album.eliminarAlbum().then();
            }

        } while (opcion.opcion !== opcionesMenu[4])
        {
            console.log("SALIR DEL SPOTIFY TRUCHOS");
        }
    } catch (error) {
        console.error(error);
    }
}

async function main() {
    await menu()
}

await main()