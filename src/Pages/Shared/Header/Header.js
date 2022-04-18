import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handlesingOut = () => {
        signOut(auth);
    }

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img style={{ height: "60px" }} src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                            {
                                user ?
                                    <button onClick={handlesingOut} className='bg-red-500 p-2 rounded-lg text-white'>Sign Out</button>
                                    :
                                    <button className='bg-red-500 p-2 rounded-lg text-white'><Link style={{ paddingLeft: 13, textDecoration: 'none' }} className='text-white text-dacuration-none' to="/login">Login</Link></button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;