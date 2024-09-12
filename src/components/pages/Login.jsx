import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    const respuesta = await login(usuario);
    try {
      if (respuesta.status === 200) {
         //aqui el usuario ya esta logueado
        Swal.fire(
          "¡Bienvenido!",
          "Has iniciado sesión correctamente",
          "success"
        );
        const datos = await respuesta.json();
        //actualizar el sessionStorage
        sessionStorage.setItem(
          "usuarioRollingCoffee",
          JSON.stringify({ email: datos.email, token: datos.token })
        );
         //actualizar el state
        setUsuarioLogueado(datos);
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrió un error",
          "Correo o contraseña incorrectos",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Ocurrió un error",
        "Error procesando la respuesta del servidor",
        "error"
      );
    }
  };

  return (
    <Container className="my-5">
      <h1 className="mb-5">Ingresa al sitio</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: juan@mail.com"
            {...register("email", {
              required: "El correo es obligatorio",
              minLength: {
                value: 4,
                message: "El email debe contener al menos 4 caracteres",
              },
              maxLength: {
                value: 250,
                message: "El email debe contener como máximo 250 caracteres",
              },
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message:
                  "El correo debe ser un email valido Ej: nombre@mail.com",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            placeholder="ingrese una contraseña"
            {...register("password", {
              required: "El password es obligatorio",
              minLength: { value: 8, message: "el minimo es de 8 caracteres" },
              maxLength: {
                value: 12,
                message: "el maximo es de 15 caracteres",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
              },
            })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Text className="text-danger">
            {" "}
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;