import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
 const {register, handleSubmit,  formState: { errors }} = useForm();

const onSubmit = (usuario)=>{
    console.log(usuario)
}

  return (
    <Container className="my-5">
      <h1 className="mb-5">Ingresa al sitio</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico:</Form.Label>
          <Form.Control type="email" placeholder="Ej: juan@mail.com" {
            ...register("email",{
                required: "El correo es obligatorio",
                pattern:{
                    value:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:"El correo debe ser un email valido Ej: nombre@mail.com"
                }
            })
          }/>
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
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
