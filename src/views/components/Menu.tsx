import { Navbar, Container, Nav } from 'react-bootstrap'

import '../../styles/menu.css'

const Menu = () => {
  return (
    <Navbar bg="dark" sticky='top' data-bs-theme="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
            <div className='menu-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center" style={{width: '100%'}}>
            <Nav.Link href="#home" className='custom-nablink'>Inicio</Nav.Link>
            <Nav.Link href="#services" className='custom-nablink'>Servicios</Nav.Link>
            <Nav.Link href="#about" className='custom-nablink'>Sobre mí</Nav.Link>
            <Nav.Link href="#project" className='custom-nablink'>Proyectos</Nav.Link>
          </Nav>
          <Nav className="me-auto justify-content-end">
            <div className='d-flex flex-row justify-content-start'>
                <Nav.Link href="https://www.instagram.com/namartdev" style={{marginRight: '16px'}} target='_blank'><i className="bi bi-instagram fs-5" /></Nav.Link>
                <Nav.Link href="https://github.com/mnava1418" target='_blank'><i className="bi bi-github fs-5" /></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu