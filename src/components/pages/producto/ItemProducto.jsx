import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { eliminarProductoAPI, listarProductos } from "../../helpers/queries";
const ItemProducto = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar el producto?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //pedirle a la api realizar el delete
        const respuesta = await eliminarProductoAPI(producto._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto ${producto.nombreProducto} fue eliminado correctamente`,
            icon: "success",
          });
          //actualizar tabla
          //pedir los datos actualizados a la api
          const respuestaListaProductos = await listarProductos();
          if (respuestaListaProductos.status === 200) {
            const datosActualizados = await respuestaListaProductos.json();
            //actualizar el state de productos
            setProductos(datosActualizados);
          }
        } else {
          Swal.fire({
            title: "Error al eliminar el producto",
            text: "El producto x no pudo ser eliminado",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+ producto.id  }>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger">
          <i className="bi bi-trash" onClick={borrarProducto}></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;