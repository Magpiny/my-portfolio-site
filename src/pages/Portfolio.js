import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { Navbar } from 'react-bootstrap';
import { Link } from 'gatsby';

import Footer from "../components/Footer";

const Portfolio = () => {
    return (
        
        <Container className="mt-5">
            {/* First Row */}
            <Row>
                <h1 className="text-warning text-center">MAGPINY IO</h1>
            </Row>

            <Row xs={12} sm={12} md={12}>
                <Navbar xs={12} sticky="top" expand="md" variant="sucess" bg="warning">
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>

                    <Navbar.Brand>
                        <Link to="/About">About</Link>
                    </Navbar.Brand>

                    <Navbar.Brand>
                        <Link to="/Contact">Contacts</Link>
                    </Navbar.Brand>

                    <Navbar.Brand>
                        <Link to="/Blog">Blog</Link>
                    </Navbar.Brand>

                </Navbar>
            </Row>
            <Row>
                <Col className="mb-3">
                    <Card style={{ width: '21rem' }}>
                    <Card.Img variant="top" src="https://ik.imagekit.io/magpiny21/myPortfolio/version0.1_nTWZnvIAz.png" alt="audio-player-app" />
                    <Card.Body>
                        <Card.Title>Audio Player</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Python PyQt5 pyGame</Card.Subtitle>
                        <Card.Text>
                        Audio player in PyQt5 and pyGame for sound...
                        </Card.Text>
                        <Card.Link href="https://github.com/Magpiny/Python-Gui-Programming">Github</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://ik.imagekit.io/magpiny21/myPortfolio/jsCalculator_q4CLHd2_L.png" />
                    <Card.Body>
                        <Card.Title>Js Calculator</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> HTML5 CSS Js </Card.Subtitle>
                        <Card.Text>
                        Practised Neumorphic design by making this beautiful calculator
                        </Card.Text>
                        <Card.Link href="https://github.com/Magpiny/jsCalculator">Github</Card.Link>
                        <Card.Link href="https://jscalculator1.netlify.app">Go Live</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://ik.imagekit.io/magpiny21/myPortfolio/weatherApp_JRZs1qDBnWn.png?tr=w-1200,h-630,fo-auto" />
                        <Card.Body>
                            <Card.Title>Weather App</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">reactjs openweather API</Card.Subtitle>
                            <Card.Text>
                            Practised making API requests in reactjs...
                            </Card.Text>
                            <Card.Link href="https://github.com/Magpiny/react-weatherApp">Github</Card.Link>
                            <Card.Link href="https://mvua-appu.netlify.app

">Go Live</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Second Row */}
            <Row>
                <Col className="mb-3">
                    <Card style={{ width: '21rem' }}>
                    <Card.Img variant="top" src="https://ik.imagekit.io/magpiny21/myPortfolio/todoPro_mofOu5FuP.png" />
                        <Card.Body>
                            <Card.Title>Todo app</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">html5 CSS3 Js indexedDB</Card.Subtitle>
                            <Card.Text>
                            Practised browser storage using indexedDB storage
                            </Card.Text>
                            <Card.Link href="https://github.com/Magpiny/ToDoList">Github</Card.Link>
                            <Card.Link href="https://to-do-list-blush.vercel.app/">Go Live</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="mb-3">
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://ik.imagekit.io/magpiny21/myPortfolio/twirra1_GdWMy1j8ZUe.png" />
                            <Card.Body>
                                <Card.Title>Twitter clone</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">reactjs material-ui firebase</Card.Subtitle>
                                <Card.Text>
                                Twitter clone made with reactjs on UI, material-ui for styling and 
                                firebase on the backend
                                </Card.Text>
                                <Card.Link href="https://github.com/Magpiny/twirra">Github</Card.Link>
                                <Card.Link href="https://twirra1.web.app/">Go Live</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                <Col className="mb-3">
                    <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src="https://ik.imagekit.io/magpiny21/myPortfolio/tod_sKZa8rtu05R.png" />
                            <Card.Body>
                                <Card.Title>Chat App</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Reactjs chatEngine </Card.Subtitle>
                                <Card.Text>
                                Chat app built with Reactjs and powered by chat engine...
                                </Card.Text>
                                <Card.Link href="https://github.com/Magpiny/chat-app">Github</Card.Link>
                                <Card.Link href="https://chat-app-magpiny.vercel.app/">Go Live</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>

            {/* Last Row */}
            
            <Row>
                <Col>
                    <Footer title="Portfolio" />
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio;
