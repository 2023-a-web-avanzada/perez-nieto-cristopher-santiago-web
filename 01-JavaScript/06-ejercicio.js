const fs = require('fs'); //file system
// Importar modulo fs

fs.readFile('06-ejemplo.txt', 'utf8', (error, texto) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(texto);

    fs.readFile('01-variables.js', 'utf8', (error, variables) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(variables);

        const nuevoContenido = texto + '\n\n' + variables;
        fs.writeFile('06-nuevo.txt', nuevoContenido, 'utf8', (error) => {
            if (error) {
                console.error(error);
            }
            fs.readFile('06-nuevo.txt', 'utf8', (error, contenido) => {
                if (error) {
                    console.error(error);
                    return;
                }
                console.log(contenido);
            });
        });
    });
});