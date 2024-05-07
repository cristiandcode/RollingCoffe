import { Navigate } from "react-router-dom";


const RutasProtegidas = ({children}) => {
   //agregar la logica necesaria para definir si muestro u oculto las rutas hijas
   const userAdmin = JSON.parse(sessionStorage.getItem('usuarioRollingCoffee')) || null;
   //preguntar si no hay nadie como admin
   if(!userAdmin){
    //redireccionar al login
    return <Navigate to={'/login'}></Navigate>
   }else{
    return children
   }
};

export default RutasProtegidas;