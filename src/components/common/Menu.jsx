import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/Coffee_Logo.png";
// import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link end className="nav-link" to="/">
              Inicio
            </Nav.Link>
            <Nav.Link end className="nav-link" to="/administrador">
              Administrador
            </Nav.Link>
            <Nav.Link end className="nav-link" to="/login">
              Login
            </Nav.Link>
            <Nav.Link end className="nav-link" to="/registro">
              Registro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
