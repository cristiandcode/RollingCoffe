const URI_PRODUCTOS= import.meta.env.VITE_API_PRODUCTOS;

console.log(URI_PRODUCTOS);

export const leerProductosAPI = async()=>{
    try{
        const respuesta = await fetch(URI_PRODUCTOS);
        console.log(respuesta);
        const listaProductos = await respuesta.json();
        console.log(listaProductos);
        return listaProductos;
    }catch (error){
        console.log(error)
    }
}