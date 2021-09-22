import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar} from 'react-bootstrap'
const Barra = () => {
    return (
        <div>
            <Navbar bg="secondary" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                <img  className="logo" src="../logo.png"  alt="logo"/>{' '}
                Transparencia
                </Navbar.Brand>

                <Navbar.Collapse>
                <Nav>
                    <Nav.Link > <Link to="/" style={{ textDecoration: 'none' }}><span>Inicio</span></Link></Nav.Link>
                    <Nav.Link > <Link to="/Transparencia" style={{ textDecoration: 'none' }}><span>Transparencia</span></Link></Nav.Link>
                    
                
                </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default Barra
