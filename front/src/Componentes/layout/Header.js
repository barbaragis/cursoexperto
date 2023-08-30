import React from "react";
import "../../Styles/Componentes/layout/Header.css"

const Header = () =>{
    return(
        <div className="header">
            <img src="/images/header.jpg"  alt="header"/>
            <div className="contenido">
                <h1> HOTEL NEW GARDEN </h1>
                <span> HOTEL & RESORT  </span> 
            </div>
        </div>
    )
}

export default Header;