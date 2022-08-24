import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget.js";
import { Link } from "react-router-dom";

function NavbarPropia() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="sinSubrayado">
            ECOMMERCE PAK
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/category/celulares" className="Option sinSubrayado">
                Celulares
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/category/notebooks" className="Option sinSubrayado">
                Notebooks
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/category/tablets" className="Option sinSubrayado">
                Tablets
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPropia;
