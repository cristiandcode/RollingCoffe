import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
              alt="Medialuna"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">Medialuna</Card.Title>

              <Card.Text>
                Sumérgete en el deleite irresistible de nuestras medialunas
                artesanales, donde la suavidad de la masa se encuentra con la
                indulgencia del sabor. Con una mezcla perfecta de tradición y
                pasión, cada medialuna es una obra maestra horneada que seduce
                tus sentidos con cada bocado. Desde las clásicas de manteca
                hasta las exquisitas de chocolate, cada opción es una invitación
                a un mundo de placer culinario. Elige calidad, elige sabor,
                elige nuestras medialunas para una experiencia única en cada
                momento del día.
                <br />
                <br />
                <span className="primary-font fw-semibold ">
                  Categoria:
                </span>{" "}
                Dulce
                <br className="mb-3" />
                <span className="primary-font fw-semibold ">Precio: $400</span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
