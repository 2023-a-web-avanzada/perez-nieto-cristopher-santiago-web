import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs');
const equipos = []
export class FileManager {
    async leer(path) {
        return await new Promise(
            (resolve, reject) => {
                fs.readFile(
                    path,
                    'utf-8',
                    (errorEnLectura, contenidoArchivo) => {
                        if (errorEnLectura) {
                            console.error(errorEnLectura);
                            reject('Error al leer el archivo');
                        }
                        if( contenidoArchivo === ''){
                            resolve('')
                        }
                        resolve(JSON.parse(contenidoArchivo))
                    }
                );
            }
        )
    }

    async escribir(path, contenido) {
        return await new Promise(
            (resolve, reject) => {
                fs.writeFile(
                    path,
                    JSON.stringify(contenido),
                    (errorEscritura) => {
                        if (errorEscritura) {
                            console.error(errorEscritura);
                            reject('Error al escribir el archivo');
                        }
                        resolve("Escrito correctamente");
                    }
                );
            }
        )
    }
}
