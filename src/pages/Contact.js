import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'gatsby';

import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <h1>Contacts Page</h1>
            <Navbar>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
            </Navbar>
            <Footer title="Contacts" />
        </div>
    )
}

export default Contact;
