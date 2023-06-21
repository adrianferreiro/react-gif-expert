import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {
  
    test('debe cambiar el valor de la caja de texto', () => {

        //*********************************************************************************** */
        //resumen:
        //creamos sujeto de pruebas
        //extraemos el input
        //disparamos el evento
        //y hacemos la aserción de lo que estamos esperando que suceda después del evento
        
        render(<AddCategory onNewCategory={()=>{}} />);
        
        const input = screen.getByRole('textbox');
        //vamos a verificar el evento onchange que vemos que tiene cuando hacemos el debug y debería cambiar el valor del "value"
        fireEvent.input(input, {target: {value: 'Saitama'}});
        
        //ahora vemos si el input es igual al valor
        expect(input.value).toBe('Saitama');
        //*********************************************************************************** */

    });
        //ahora vamos a simular un submit del formulario
        
    test('debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama'; //ésto es lo que yo quiero que tenga la caja de texto
        
        //probamos la función onNewCategory
        const onNewCategory = jest.fn(); //es una función marcada como MOCK
        //Mock: cuando estamos hablando del testing es una simulación, es decir que no es la implementación real de la función sino una simu-
        //lación de esa función


        //levantamos nuestro sujeto de prueba
        // render(<AddCategory onNewCategory={()=>{}} />);
        render(<AddCategory onNewCategory={onNewCategory} />);
    
        //extraemos dos referencias
        //la referencia al input
        const input = screen.getByRole('textbox');
        //la referencia al formulario
        const form = screen.getByRole('form'); //para que reconozca el form tenemos que agregar en AddCategory.jsx el aria-label al form
        
        //disparo el primer evento del formulario que es para establecer el valor o sea value='Saitama'
        fireEvent.input(input, {target: {value: inputValue}});
        //ahora disparo el evento submit
        fireEvent.submit(form); // podemos hacer un console.log en el submit del componente para verificar que se está disparando el evento submit
        expect(input.value).toBe('');

        //verificamos que mi función onNewCategory fue llamada
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);//verificar que se llame una sola vez
        //ahora verificamos que haya sido llamado con el valor de nuestro inputValue (Saitama)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    
    test('No debe llamar onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);//otra forma de verficiar que la función no haya sido llamada
        
    })
    
        
});
