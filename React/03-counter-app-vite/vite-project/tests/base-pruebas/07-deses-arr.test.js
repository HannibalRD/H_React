import { retornaArreglo } from "../../src/base-pruebas/base-pruebas/07-deses-arr";

describe('Pruebas del 07-deses-arr', () =>{

    test('retornaArreglo tiene que devolver un string y un numero', () =>{

        const [letter, numbers]= retornaArreglo()

        // expect(arreglo).toEqual(retornaArreglo());
        expect( letter ).toBe('ABC');
        expect( numbers ).toBe(123)

        expect( typeof letter ).toBe('string');
        expect( typeof numbers ).toBe('number')
        
        expect(  numbers ).toEqual(expect.any(Number))
        expect(  letter ).toEqual(expect.any(String))

    })
})