// e2Q5YhlVAB0xc5VU7iC7QN2q1WepqkgY
export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?key=e2Q5YhlVAB0xc5VU7iC7QN2q1WepqkgY&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //usamos map porque es un arreglo para obtener solamente los datos que necesitamos del resultado de la api
    //en éste caso id, title y url
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}