import * as React from "react";
import { Helmet } from "react-helmet";
// import { StaticImage } from "gatsby-plugin-image"
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

import * as indexStyles from "./index.module.css";

import Navbar1 from "../components/Navbar";
import Footer from "../components/Footer";

const index = () => {
  return (
      <Container className={`${indexStyles.container}`}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Magpiny portfolio site" />
          <meta property="og:title" content="Magpiny Portfolio" />
          <meta property="og:type" content="website" />
          <title>Magpiny Portfolio</title>
          <link rel="icon" href="https://ik.imagekit.io/magpiny21/myPortfolio/logo2_y7hnEKEru.png" />
          
          
        </Helmet>
        <Row xs={12} sm={12}>
          <Col xs={12}>
          <Navbar1 />
          </Col>
        </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
            <Jumbotron size="md" className={`${indexStyles.bgstyle } mt-3`}>
              <h2>Hello, friend!</h2>
              <p className="fs-3 fw-bolder">
                Am <span className="text-primary fs-2">Sam</span ><span className="text-danger">uel</span> <span>Wan</span><span className="text-success">jare</span> ,
              </p>
              <pre className={ indexStyles.typewriter }>
                A web developer, a teacher and
                 a sportsman.
              </pre>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>

        </Col>
        <Col xs={12} sm={12} md={6}>
        <Image src="https://ik.imagekit.io/magpiny21/myPortfolio/magpiny_VzUR47SMv.jpg" 
               className="mt-3 "
               roundedCircle
               fluid />
        
        </Col>

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
