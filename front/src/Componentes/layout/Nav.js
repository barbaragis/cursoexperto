import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Componentes/layout/Nav.css";

const Nav = () =>{
    return(
        <nav className="navbar">
            <div className="nav">
                <img className="logo" src="images/logo.png"  alt="logo"/>
                <ul className="navbar links">
                    <li > <Link to={"/"} > HOME </Link></li>
                    <li> <Link to={"/nosotros"} > NOSOTROS </Link></li>
                    <li> <Link to={"/novedades"} > NOVEDADES </Link></li>
                    <li> <Link to={"/contacto"} > CONTACTO </Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;