import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
   //agrega la logica que quiero que ocurra para considerar si soy admin o no
   const admin = JSON.parse(sessionStorage.getItem('inicioRollingCoffe')) || null;
   //quiero saber si no es el admin
   if(!admin){
    //si no es el admin lo redirecciono al login
    return <Navigate to='/login'></Navigate>
   }else{
    //si soy admin
    return children
   }
};

export default RutasProtegidas;