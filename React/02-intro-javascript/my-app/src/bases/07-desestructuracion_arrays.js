// const personajes = [ 'goku', 'vegetta','trunks'];

// const [,,p1] = personajes;

// console.log (p1)


// const retornarreglo = ()=>{
//     return['ABC', 123]
// }
// const [letras,numeros] = retornarreglo()
// console.log(letras,numeros)

const holaState = (valor) =>{
    return [ valor, ()=> {console.log('hola mundo')}]
}

const [nombre,setnombre] = holaState('goku');


console.log(nombre)
setnombre()