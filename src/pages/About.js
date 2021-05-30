import React from 'react';
import { Helmet } from "react-helmet";
import { Navbar, Container,Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

import Footer from "../components/Footer";
// import * as styles from "./pages_styles/about.module.css";

const About = () => {
    return (
        <Container >
            <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Magpiny portfolio site about page" />
          <meta property="og:title" content="About Magpiny" />
          <meta property="og:type" content="website" />
          <title>About</title>
          <link rel="icon" href="https://ik.imagekit.io/magpiny21/myPortfolio/logo2_y7hnEKEru.png" />
          
          
        </Helmet>
            <Row xs={12} sm={12}>
                <h1 className="text-warning text-center">MAGPINY IO</h1>
            </Row>

            <Row>
            <Navbar className="float-right" sticky="top" expand="md" variant="sucess" bg="warning">
                <Navbar.Brand>
                    <Link to="/">Home</Link>
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
            </Row>

            <Row className="bg-light">
                <Col bg="light">
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Reactjs</li>
                        <li>Gatsbyjs</li>
                    </ul>
                </Col>
                
            </Row>

            <Row sticky="bottom" expand="md" variant="sucess" bg="warning">
                <Footer title="About" />
            </Row>

           
            
            
        </Container>
    )
}

export default About;
