const fs = require('fs');


fs.readFile('listado.txt', 'utf8', (error, datos) => {
    if (error) {
    console.error('Error al leer el archivo:', error);
    return;
    }
    console.log('Contenido del archivo:\n', datos);
});