// Stringify y Parse

const arregloUsuarios = [
    {
        id: 1,
        nombre: 'Adrian',
    }
];
const arregloGuardado = JSON.stringify(arregloUsuarios); // Arreglo, Objeto
const usuario = {
    id: 1,
    nombre: 'Adrian',
};
const objetoGuardado = JSON.stringify(usuario); // Arreglo, Objetos
console.log('arregloGuardado', arregloGuardado);
console.log('objetoGuardado', objetoGuardado);
const arregloRestaurado = JSON.parse(arregloGuardado);
const objetoRestaurado = JSON.parse(arregloGuardado);
console.log('arrelgoRestaurado', arregloRestaurado);
console.log('objetoRestaurado', objetoRestaurado);



