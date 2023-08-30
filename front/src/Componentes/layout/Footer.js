import React from 'react';
import "../../Styles/Componentes/layout/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="footer-logo" src="images/logo.png"  alt="logo"/>
        <p className='footer-rights'> 2023 Todos los derechos reservados </p>
      </div>
    </footer>
  );
};

export default Footer;
