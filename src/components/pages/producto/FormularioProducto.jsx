import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProducto, editarProducto, obtenerProducto } from "../../helpers/queries.js";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormularioProducto = ({ creando }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();


const navegacion = useNavigate();

  useEffect(() => {
    //verificar si estoy editando
    if (creando === false) {
      const { id } = useParams();
    }
  }, []);

  const cargarProducto = async () => {
    //pedir a la api el producto que tiene el id de la ruta
    const respuesta = await obtenerProducto(id);
    if(respuesta.status === 200){
      const producto = await respuesta.json();
      //con la respuesta cargar la info en el formulario
      setValue("nombreProducto", producto.nombreProducto)
      setValue("precio", producto.precio)
      setValue("imagen", producto.imagen)
      setValue("descripcion_amplia", producto.descripcion_amplia)
      setValue("descripcion_breve", producto.descripcion_breve)
      setValue("categoria", producto.categoria)
    }
  };

  const productoValidado = async (producto) => {
    console.log(producto);
    if (creando) {
      //tengo que pedir a la api crear un producto
      const respuesta = await crearProducto(producto);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto creado",
          text: `El producto ${producto.nombreProducto} fue creado correctamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto ${producto.nombreProducto} no fue creado. Intenta nuevamente en unos minutos`,
          icon: "error",
        });
      }
    } else {
      //tengo que pedir a la api editar el producto
      const respuesta = await editarProducto(producto, id)
      if(respuesta.status === 200){
        Swal.fire({
          title: "Producto editado",
          text: `El producto ${producto.nombreProducto} fue editado correctamente`,
          icon: "success",
        });
        //redireccionar al administrador
        navegacion('/administrador')
      }
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Administrar producto</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como minimo 2 caracteres para el nombre del producto",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingresar como maximo 50 caracteres para el nombre del producto",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 50,
                message: "El precio como minimo debe ser de $50",
              },
              max: {
                value: 20000,
                message: "El precio como maximo debe ser de $20000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
            <option value="Sandwich">Sandwich</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripcion breve del producto es obligatorio",
              minLength: {
                value: 5,
                message:
                  "Debe ingresar como minimo 5 caracteres para la descripcion breve",
              },
              maxLength: {
                value: 100,
                message:
                  "Debe ingresar como maximo 100 caracteres para la descripcion breve",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {...register("descripcion_amplia", {
              required: "La descripcion amplia es obligatoria",
              minLength: {
                value: 30,
                message:
                  "Debe ingresar como minimo 30 caracteres para la descripcion amplia",
              },
              maxLength: {
                value: 500,
                message:
                  "Debe ingresar como maximo 500 caracteres para la descripcion amplia",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;