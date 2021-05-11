import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'gatsby';

import Footer from "../components/Footer";

const Blog = () => {
    return (
        <div>
          <h1>Welcome to my Blog...</h1>
          <Navbar>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
          </Navbar>
          <Footer title="Blog" />
        </div>
    )
}

export default Blog;

