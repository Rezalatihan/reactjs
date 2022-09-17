import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarcomp() {
  return (
    <Navbar style={{ backgroundColor: "rgb(119, 114, 114)" }}>
      <Container>
        <Navbar.Brand href="#">Reza Catria Akbar</Navbar.Brand>
        <Nav className="d-flex justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About </Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
