import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";


const DetalleProducto = () => {
const {id} = useParams();
const [producto, setProducto] = useState({});

useEffect(()=>{
  //buscar el producto que quiero maquetar
  cargarDetalle();
},[])

const cargarDetalle = async()=>{
  const respuesta = await obtenerProductoAPI(id)
  if(respuesta.status === 200){
    //mostrar el producto en la card
    const datoProducto = await respuesta.json();
    setProducto(datoProducto);
  }else{
    Swal.fire({
      title: "Ocurrio un error",
      text: "Intente realizar esta operacion en unos minutos",
      icon: "error",
    });
  }
}

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
              <hr />
              <Card.Text>
              {producto.descripcion_amplia}
              <br/>
              <br/>
              <span className="primary-font fw-semibold ">Categoria:</span> {producto.categoria}
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${producto.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
