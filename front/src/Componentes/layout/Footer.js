import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../../Styles/Componentes/layout/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <img className="footer-logo" src="images/logo.png"  alt="logo"/>
        <ul className="footer-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/novedades">Novedades</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>

        <ul className="footer-links">
          <li>23 rue du Faubourg Montmartre 75009,</li>
          <li>Buenos Aires</li>
          <li>info@hotelnewgarden.com</li>
          <li>Teléfono : 11 53 34 98 10</li>
        </ul>

      </div>
      <div className="footer-bottom">
        <p className="footer-rights">© 2023  Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
