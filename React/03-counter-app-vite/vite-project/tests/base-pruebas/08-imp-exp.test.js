import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";
import  heroes  from "../../src/data/heroes.js";
describe('Pruebas 08-imp-exp.js', () =>{

    test('getHeroesByID debe devolver un heroe por ID', () =>{
        const id = 1;
        const hero = getHeroeById( id );
        console.log( hero)

        expect( hero ).toEqual({"id": 1, "name": "Batman", "owner": "DC"})
    })

    test('getHeroesByID debe devolver un undefined si no existe', () =>{
        const id = 6;
        const hero = getHeroeById( id );
        console.log( hero)

        expect( hero ).toBeFalsy();
    })
    test('debe regresar heroes de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        console.log( heroes )

        expect( owner.length ).toBe( 2 );
        expect( heroes.length ).toBe( 3 );
        expect( heroes).toEqual([{ 
        id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }]
        );
        expect( heroes ).toEqual( heroes.filter( (heroe)=>heroe.owner === owner));
    })
})