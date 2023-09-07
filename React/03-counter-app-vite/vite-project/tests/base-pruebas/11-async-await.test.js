import { getImagen } from "../../src/base-pruebas/base-pruebas/11-async-await";

describe('11-async-await pruebas', () => { 
    

test('getImagen devolvera una imagen aleatoria', () => { 
    
    const url = await getImagen();
    console.log(url)
    
})
})