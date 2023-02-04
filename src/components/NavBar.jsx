import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>Phillip Friis-Alstrup</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-center ms-auto">
            <NavDropdown title="4. semester" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/blog" onClick={() => setExpanded(false)}>Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/læringsplaner" onClick={() => setExpanded(false)}>Læringsplaner</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/læringsmål" onClick={() => setExpanded(false)}>Læringsmål</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/litteratur" onClick={() => setExpanded(false)}>Litteratur</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/projekter" onClick={() => setExpanded(false)}>Projekter</Nav.Link>
            <Nav.Link as={Link} to="/om" onClick={() => setExpanded(false)}>Om mig</Nav.Link>
            <Nav.Link as={Link} to="/kontakt" onClick={() => setExpanded(false)}>Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
