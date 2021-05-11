import React from 'react';
import { Link } from 'gatsby';
import Navbar from "react-bootstrap/Navbar";
import { Container } from 'react-bootstrap';

const Navbar1 = () => {
    return (
        <Container>
            <Navbar sticky="top" variant="sucess" bg="success">
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/About">About</Link>
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/Portfolio">Portfolio</Link>
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/Contact">Contacts</Link>
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/Blog">Blog</Link>
                </Navbar.Brand>
            </Navbar>
    
        </Container>
    )
}

export default Navbar1;
