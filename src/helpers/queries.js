const URI_PRODUCTOS= import.meta.env.VITE_API_PRODUCTOS;

console.log(URI_PRODUCTOS);

//GET
export const leerProductosAPI = async()=>{
    try{
        const respuesta = await fetch(URI_PRODUCTOS);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch (error){
        console.log(error)
    }
}

// POST
export const crearProductoAPI = async(productoNuevo)=>{
    try {
        const respuesta = await fetch(URI_PRODUCTOS, {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoNuevo)
        })
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}