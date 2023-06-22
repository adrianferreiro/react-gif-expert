import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe regresar el estado inicial', () => {
        //el estado inicial es lo que estamos evaluando, por ej, que en images haya un arreglo vacío o que isLoading sea true
        
        const {result} = renderHook(()=> useFetchGifs('One Punch'));
        //console.log(result); //para ver que trae el objeto para desestructurar
        //me trae esto // { current: { images: [], isLoading: true } }
        //desestructuramos
        const {images, isLoading} = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        //useFetchGifs();
    });

    test('Debe retornar un arreglo de imágenes e isLoading en false', async () => {
        
        const {result} = renderHook(()=> useFetchGifs('One Punch'));

        //importamos wait for para poder esperar a que se haga la petición y se actualice images e isLoading
        await waitFor(
            //le pasamos un callback
            //vamos a usar una expresión de jest para que esté pendiente de cuando sucede el cambio
            ()=> expect(result.current.images.length).toBeGreaterThan(0),
            //usamos el time out porque puede haber por ej un error en el backend y tenemos que dejar de esperar
            {
                timeout: 6000
            }//si no ponemos el timeout tiene un segundo por defecto
        );

        //una vez que se cumple lo de arriba .. hace lo siguiente
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        
    })
    
    
});
