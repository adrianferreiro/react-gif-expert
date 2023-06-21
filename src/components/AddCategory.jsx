import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('');
    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }
    const onSubmit = (event) => {
        console.log('Hola mundo en el submit');//agregamos éste console log para el test así verificamos que estabamos disparando el submit en la prueba
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories((categories) => [inputValue, ...categories]);
        onNewCategory(inputValue);
        setinputValue('');
    }
    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={(event)=> onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
  )
}

AddCategory.propTypes ={
    onNewCategory: PropTypes.func.isRequired,
}
