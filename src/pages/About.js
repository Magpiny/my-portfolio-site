import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'gatsby';

import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Navbar>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
            </Navbar>
            <Footer title="About" />
        </div>
    )
}

export default About;
