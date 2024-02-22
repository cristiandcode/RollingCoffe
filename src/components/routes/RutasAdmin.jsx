import { Route, Routes } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioProducto from "../pages/producto/FormularioProducto";


const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/crear"
          element={
            <FormularioProducto
              editar={false}
              titulo="Nuevo producto"
            ></FormularioProducto>
          }
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id"
          element={
            <FormularioProducto
              editar={true}
              titulo="Editar producto"
            ></FormularioProducto>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
