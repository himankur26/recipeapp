//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Search from './Search';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Simply Recipies</Navbar.Brand>
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
              <NavDropdown.Item as={Link} to="/recipes/veg">Veg recipies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipes/non-veg">
                Non Veg
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipes/desert">
                Desert
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex align-items-center gap-3">
         <Search/>
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