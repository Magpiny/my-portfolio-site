import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";

const index = () => {
  return (
      <Container>
        <Row>
          <Col>
          <Navbar1 />
          </Col>
        </Row>
      <Row>
        <Col>
            <Jumbotron size="md" className="mt-3">
              <h1>Hello, there!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>

        </Col>

        
        

      </Row>

      <Row>
      <Col>Hello there</Col>
      <Col>Hello there</Col>
      <Col>Hello there</Col>
        
      </Row>
      <Row>
        <Col>
        <Footer title="Home" />
        </Col>
      </Row>
    </Container>
  )
    
}

export default index;
