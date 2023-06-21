import { getGifs } from "../../src/helpers/getGifs"

// usamos .js porque no es un funcional component
describe('Pruebas en getGifs()', () => {
  
    test('Debe retornar un arreglo de gifs', async () => {
      
        const gifs = await getGifs('One Punch');
        console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0); //mayor a cero

        //llegamos a este punto si es que es mayor a cero así que ahora vamos a inspeccionar el primer elemento
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String), 
        });
    })
    
})
