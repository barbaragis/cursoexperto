import React, { useEffect, useState } from "react";
import "../Styles/Componentes/Pages/Novedades.css"
import axios from 'axios';
import PromocionItem from "../Componentes/promociones/PromocionItem";


const Novedades = (props) =>{
    const [loading , setLoading] = useState(false);
    const [promociones , setPromociones] = useState([]);

    useEffect(() => {
        const cargarPromociones = async() => {
            setLoading(true);
            
            const response = await axios.get('http://localhost:3000/api/promociones');
            setPromociones(response.data);
            setLoading(false);
        };

        cargarPromociones();
    }, []);

    return(
        <>
        <div>
            <h1 className="encabezado">NOVEDADES & PROMOCIONES </h1>
        </div>
        <div className="promociones">
            {loading ? (
                <p> Cargando...</p>
            ) : (
            promociones.map(item => <PromocionItem key={item.id} 
            title= {item.titulo} subtitle = {item.subtitulo} imagen={item.imagen} body={item.cuerpo} />)
            )}
        </div>
        </>
    )
}

export default Novedades;

