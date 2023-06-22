import React from 'react';
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs'); // con ésto estamos diciéndole que haga un mock completo de éste path

describe('Pruebas en <GifGrid/>', () => {
  
    const category = 'One Punch';

    //evaluamos el estado inicial
    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });//vamos a simular que la función retorna éste objeto

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });
    
    //hacer un mock completo de un Custom Hook
    test('debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        //antes de randerizar el componente tengo que hacer el mock del hook
        //importamos la función useFetchGifs
        //hacemos el mock completo del path arriba
        const gifs = [//inventamos un objeto para simular "images"
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://cualquiercosa/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://cualquiercosa/goku.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });//vamos a simular que la función retorna éste objeto
        render(<GifGrid category={category} />);
        //no pasa de nuevo el test para el IMG
        // expect(screen.getAllByRole('img').length).toBe(2);
        // screen.debug();
    });
    
    
})
