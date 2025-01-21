import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#">Simply Recipies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About Us </Nav.Link>
            <Nav.Link as={Link} to="contact">Contact Us </Nav.Link>

            <NavDropdown title="Recipies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Veg recipies</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Non Veg
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Desert
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex align-items-center gap-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <div>
            <Link to ="/profile">
            <FaRegUser className='h4'  />
            </Link>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;