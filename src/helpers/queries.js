const URI_PRODUCTOS= import.meta.env.VITE_API_PRODUCTOS;

console.log(URI_PRODUCTOS);

export const leerProductosAPI = async()=>{
    try{
        const respuesta = await fetch(URI_PRODUCTOS);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch (error){
        console.log(error)
    }
}