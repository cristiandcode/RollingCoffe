import { Col, Card, Button } from "react-bootstrap";

const CardProducto = () => {
 
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img src="https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="producto name" className='card-img-top-nueva' />
        </div>
        <Card.Body>
        <Card.Title className="primary-font">Titulo</Card.Title>
        <Card.Text>
          Descripción:  Caracteristicas del producto<br className="mb-2"/> 
          <span className="fw-bold">Precio: $400</span></Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
        <Button className='btn btn-success me-2' >Ver más</Button>
      </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
