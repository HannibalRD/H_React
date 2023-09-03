import { getHeroeByIdAsync } from "../../src/base-pruebas/base-pruebas/09-promesas";

describe('09-promesas pruebas', () => { 
    
test('debira devolver un heroe', (done) => { 
    const id = 1;
    getHeroeByIdAsync(id)
    .then(hero =>{
    expect( hero ).toEqual( 
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    });
    done()

        });
    });
    test('debira devolver un error si no existe el heroe', (done) => { 
        const id = 10;
        getHeroeByIdAsync(id)
        .then(hero =>{
            expect( hero).toBeFalsy();
            done()
        })
        .catch(error =>{
       
       expect( error).toBe('No se pudo encontrar el héroe' + id)
        done()
    
            });
        });
})