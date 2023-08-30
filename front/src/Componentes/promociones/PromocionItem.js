import React from 'react';
import "../promociones/PromocionItem.css";

const PromocionItem = (props) =>{
    const {title , subtitle , imagen , body} = props;

    return(
        <div className="promociones">
            <h1>{title}</h1>
            <h2> {subtitle} </h2>
            <img src={imagen}  alt='imagen'/>
            <div className="promociones__cuerpo" dangerouslySetInnerHTML={{ __html: body}} />
            <hr />
        </div>
    )
}

export default PromocionItem;