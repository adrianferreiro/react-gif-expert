
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid =  ({category}) => {
  //useEffect:
  //* primer argumento es la función que queremos ejecutar una solavez
  //* segundo argumento es la lista [] de condiciones que se deben cumplir para que se ejecute la función

  //customHook
  const {images, isLoading} = useFetchGifs(category);
  
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