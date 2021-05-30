import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
const Footer = (prop) => {
    let year = new Date().getFullYear();
    return (
        <Container className="p-3 bg-warning text-center justify-content-center">
            <Row >
            { prop.title } |  Made by &hearts; Magpiny &copy; { year }
            </Row>
         
        </Container>
    )
}

export default Footer;
