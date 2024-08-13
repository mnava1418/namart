import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useEffect, useState } from 'react'

import '../../styles/menu.css'
import { language, MenuContent } from '../../interfaces/content.interface'

type MenuProps = {
  content: MenuContent,
  language: language,
  setLanguage: React.Dispatch<React.SetStateAction<language>>
}

const Menu = ({content, language, setLanguage}: MenuProps) => {
  const {about, english, home, projects, services, spanish} = content
  const [flag, setFlag] = useState(<><>🇲🇽&nbsp;&nbsp;Es</></>)

  const switchLanguage = (currentLanguage: language) => {
    setLanguage(currentLanguage)

    if(currentLanguage === 'es') {
      setFlag(<>🇲🇽&nbsp;&nbsp;Es</>)
    } else {
      setFlag(<>🇺🇸&nbsp;&nbsp;En</>)
    }
  }

  useEffect(() => {
    switchLanguage(language)
  }, [])
  
  return (
    <Navbar bg="dark" sticky='top' data-bs-theme="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">
            <div className='menu-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center" style={{width: '100%'}}>
            <Nav.Link href="#home" className='custom-nablink'>{home}</Nav.Link>
            <Nav.Link href="#about" className='custom-nablink'>{about}</Nav.Link>
            <Nav.Link href="#services" className='custom-nablink'>{services}</Nav.Link>
            <Nav.Link href="#project" className='custom-nablink'>{projects}</Nav.Link>
          </Nav>
          <Nav className="me-auto justify-content-end">
            <div className='d-flex flex-row justify-content-start align-items-center'>
                <Nav.Link href="https://www.instagram.com/namartdev" style={{marginRight: '16px'}} target='_blank'><i className="bi bi-instagram fs-6" /></Nav.Link>
                <Nav.Link href="https://github.com/mnava1418" style={{marginRight: '16px'}} target='_blank'><i className="bi bi-github fs-6" /></Nav.Link>
                <NavDropdown title={flag} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#" onClick={() => {switchLanguage('es')}}>🇲🇽&nbsp;&nbsp;{spanish}</NavDropdown.Item>
                  <NavDropdown.Item href="#" onClick={() => {switchLanguage('en')}}>🇺🇸&nbsp;&nbsp;{english}</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu