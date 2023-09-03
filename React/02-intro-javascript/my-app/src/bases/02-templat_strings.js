const nombre = 'fernando';
const apellido = 'herrera';
const nombrecompleto = `${ nombre} ${ apellido}`

console.log( nombrecompleto );

function getSaludo(nombre){
    return 'hola ' + nombre;
}

console.log(`${getSaludo(nombrecompleto)}`)