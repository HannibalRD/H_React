const persona = {
    names: 'tony',
    edad:45,
    clave: 'ironman'
}

// const { names, edad, clave } = persona

// console.log(names)
// console.log(edad)
// console.log(clave)

// const retornarPersona = ( usuario ) => {

//     const { names, edad, clave } = usuario
// console.log( edad, clave, names)
// }

// retornarPersona( persona)

// Si exite la propiedad rango en el ojeto le dara prioridad a esa en vez a la que nosotros le damos ese valor  en la funcion

const holaContext = ({names,clave, edad, rango = 'capitan'}) => {


// console.log(  names, edad, rango)

return{
    nombreClave: clave,
    anios:edad,
    latlng:{
        lat:14.1232,
        lng:12.32423
}
}
}
// si quieres sacar los datos de un objeto que que tiene otro objeto
const {nombreClave, anios, latlng} =holaContext( persona)
const {lat, lng} = latlng // seria lo mismo que poner latlng:{lat,lng} en la linia de arriba
console.log(nombreClave, anios)
console.log(latlng)
console.log(lat,lng)

