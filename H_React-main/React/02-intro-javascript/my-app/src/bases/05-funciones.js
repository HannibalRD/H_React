const saludar = function ( nombre ){
    return `hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => `hola, ${ nombre }`
const saludar3 = () => `hola mundo`


const getUser = () => 
    ({
        id: 1231232,
        name:'hannibal'
    })

    

console.log( saludar ('goku'))
console.log( saludar2 ('goku'))
console.log( saludar3 ('goku'))
console.log( getUser())