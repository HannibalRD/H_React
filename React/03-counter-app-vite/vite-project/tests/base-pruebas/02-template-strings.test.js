import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";


describe('Pruebas en 02-templae-strings',() =>{
    test('getSaludo debe retornar "hola Fernando', () =>{
        const name = 'fernando'
        const message = getSaludo(name);

        expect( message).toBe(`Hola ${ name }`)
    })
})