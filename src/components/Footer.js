import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = (prop) => {
    let year = new Date().getFullYear();
    return (
        <footer className="success">
         { prop.title } |  Made by &hearts; Magpiny &copy; { year }
        </footer>
    )
}

export default Footer
