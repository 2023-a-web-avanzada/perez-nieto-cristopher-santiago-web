import {createRequire} from 'module';
import {FileManager} from "../conexion/FileManager.js";

const require = createRequire(import.meta.url);
const inquirer = require('inquirer');
const fileManager = new FileManager()
const path = '../conexion/albumes.txt'

export class Album {
    constructor(
        nombre,
        autor,
        fechaLanzamiento,
        duracion,
        esLanzamiento,
        canciones
    ) {
        this.nombre = nombre;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.duracion = duracion;
        this.esLanzamiento = esLanzamiento;
        this.canciones = canciones;
    }
    async crearAlbum() {
        const album = new Album();
        try {
            await inquirer
                .prompt([
                    {type: 'input', name: 'nombre', message: 'Ingresa el nombre del album: '},
                    {type: 'input', name: 'autor', message: 'Ingresa el autor del album: '},
                    {type: "input", name: "fechaLanzamiento", message: 'Ingresa la fecha de lanzamiento del album: '},
                    {type: "input", name: 'duracion', message: 'Ingresa la duración del album: '},
                    {type: "input", name: "esLanzamiento", message: '¿El album acaba de lanzarse recientemente? Y / N: '}
                ]).then(datos => {
                    return new Promise(resolve => (
                        album.nombre = datos.nombre,
                            album.autor = datos.autor,
                            album.fechaLanzamiento = Date.parse(datos.fechaLanzamiento),
                            album.duracion = parseFloat(datos.duracion),
                            album.esLanzamiento = (datos.esLanzamiento === 'Y'),
                            album.canciones = [],
                            resolve(album)
                    ));
                });
        } catch (error) {
            console.error(error);
        }
        return album;
    }
    async editarAlbum() {
        let albumEditado = new Album();
        try {
            await inquirer.prompt([
                {type: 'input', name: 'nombre', message: 'Ingresa el nuevo nombre del album: '},
                {type: 'input', name: 'autor', message: 'Ingresa el nuevo autor: '},
                {type: "input", name: "fechaLanzamiento", message: 'Ingresa la nueva fecha de lanzamiento: '},
                {type: "input", name: 'duracion', message: 'Ingresa la nueva duración: '},
                {type: "input", name: 'esLanzamiento', message: '¿El album ha sido lanzado recientemente? Y / N: '},
            ]).then(datos => {
                return new Promise(resolve => (
                    albumEditado.nombre = datos.nombre,
                        albumEditado.autor = datos.autor,
                        albumEditado.fechaLanzamiento = Date.parse(datos.fechaLanzamiento),
                        albumEditado.duracion = parseFloat(datos.duracion),
                        albumEditado.esLanzamiento = (datos.esLanzamiento === 'Y'),
                        albumEditado.canciones = [],
                        resolve(albumEditado)
                ));
            });
        } catch (error) {
            console.error(error);
        }
        return albumEditado;
    }
    async eliminarAlbum() {
        let nombre
        const albumes = [];
        await fileManager.leer(path).then(
            contenido => {
                let album = contenido
                albumes.push(album)
            })
        const nombresAlbumes = [];
        albumes.forEach(album => {nombresAlbumes.push(album.nombre)})
        try {
            nombre = await inquirer
                .prompt([
                    {
                        type: 'rawlist',
                        name: 'album',
                        message: '¿Qué album desea eliminar?: ',
                        choices: nombresAlbumes
                    }
                ]).then()
            console.log('Seleccionaste el album: ' + nombre.album);

        } catch (error) {
            console.error(error);
        }
        await fileManager.escribir(path,'');
    }

}
