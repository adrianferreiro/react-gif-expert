
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid =  ({category}) => {
  //useEffect:
  //* primer argumento es la función que queremos ejecutar una solavez
  //* segundo argumento es la lista [] de condiciones que se deben cumplir para que se ejecute la función

  //customHook
  const {images, isLoading} = useFetchGifs(category);
  //tener en cuenta para los tests
  //1- cuando el componente es mostrado por primera vez se dispara el hook
  
  return (
  <>
      <h3>{category}</h3>

      {/* cargador */}
      {
        isLoading && (<h2>Cargando...</h2>)

      }

      <div className="card-grid">

        {
          images.map((image) => (
            <GifItem
              key={image.id}
              // title={image.title}
              // url={image.url}
              {... image}
            />
          ))

        }
      </div>
  </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,

}