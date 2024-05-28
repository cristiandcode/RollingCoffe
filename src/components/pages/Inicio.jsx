import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { listarProductos } from "../helpers/queries";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [hayProductos, setHayProductos] = useState(true);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await listarProductos();
    if (respuesta?.status === 200) {
      //guardo los productos en el state
      const datos = await respuesta.json();
      setHayProductos(true);
      setProductos(datos);
    } else {
      //mostrar un mensaje al usuario
      setHayProductos(false);
    }
  };

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <div className="border mb-4" />
        {hayProductos ? (
          <Row>
            {productos.map((itemProducto) => (
              <CardProducto
                key={itemProducto._id}
                producto={itemProducto}
              ></CardProducto>
            ))}
          </Row>
        ) : (
          <p>
            <span className="fw-bold">
              Actualmente no tenemos productos para mostrar.
            </span>{" "}
            ¡Pero no te preocupes! en breve contaremos con mas productos 😄
          </p>
        )}
      </Container>
    </section>
  );
};

export default Inicio;
