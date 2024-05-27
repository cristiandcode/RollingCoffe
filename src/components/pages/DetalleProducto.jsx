import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../helpers/queries";


const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({})
  
  useEffect(()=>{
    cargarProducto()
  },[])

  const cargarProducto = async () => {
    //pedir a la api el producto que tiene el id de la ruta
    const respuesta = await obtenerProducto(id);
    if(respuesta.status === 200){
      const productoBuscado = await respuesta.json();
      setProducto(productoBuscado);
    }
  };

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
              alt={producto.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{producto.nombreProducto}</Card.Title>

              <Card.Text>
              {producto.descripcion_amplia}
                <br />
                <br />
                <span className="primary-font fw-semibold ">
                  Categoria:
                </span>{" "}
                {producto.categoria}
                <br className="mb-3" />
                <span className="primary-font fw-semibold ">Precio: ${producto.precio}</span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
