import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-5">Ingresa al sitio</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico:</Form.Label>
          <Form.Control type="email" placeholder="Ej: juan@mail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control type="password" placeholder="ingrese una contraseña" />
        </Form.Group>
       
        <Form.Group className="mb-3">
          <Form.Text className="text-danger">Algun error</Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
