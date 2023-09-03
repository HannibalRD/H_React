describe('Pruebas en <DemoComp2>', () =>{

    test('Esta prueba no puede fallar', () =>{
   // 1. inicializacion
    const message1 = 'Hola mundo';
//    2. estimulo
    const message2 = message1.trim();
// 3. Observar el comportamiento... esperado
    // expect(message1 ).toBe( message2 );
    expect( message1 ).toBe( message2 );
});
});



