import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemProducto = () => {



  return (
    <tr>
      <td className="text-center">1</td>
      <td>Medialuna</td>
      <td className="text-end">$300</td>
      <td className="text-center">
        <img
          src="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
          className="img-thumbnail"
          alt="capuchino"
        ></img>
      </td>
      <td>Dulce</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2 btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
