import heroes, {owners} from '../data/heroes'
console.log(owners)
export const getHeroeById = (id) => {
    return heroes.find(( heroe ) => heroe.id === id)
}
// console.log(getHeroeById(2))

export const holaHeroes = (owner) => heroes.filter ((heroe 
    ) => heroe.owner === owner)
    // console.log(holaHeroes('DC'))