import React from "react";
import "../Styles/Componentes/Pages/Home.css";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <main className="container">
            <div className="home">
                <h2 className="home__titulo encabezado"> LE DAMOS LA BIENVENIDA A NEW GARDEN HOTEL ***</h2>
                <p className="home__parrafo"> Descubra el encanto de Buenos Aires en el Hotel BellaVista. En el corazón de la ciudad, nuestras elegantes habitaciones ofrecen comodidad y lujo moderno, con vistas panorámicas impresionantes. Nuestro restaurante de clase mundial ofrece sabores auténticos, y nuestras instalaciones incluyen spa y salas de reuniones. Con una ubicación privilegiada cerca de lugares icónicos como el Obelisco y los barrios San Telmo y Palermo, somos su puerta de entrada a lo mejor de la ciudad. Experimente la auténtica hospitalidad argentina en el Hotel BellaVista: su hogar lejos del hogar en esta inolvidable aventura porteña. </p>
            </div>
            <div className="foto-container">
                <img className="foto" src="./images/imagen_3.jpg" alt="Foto 1" style={{ width: '50px' }}/>
                <img className="foto" src="./images/imagen_4.jpg" alt="Foto 2" style={{ width: '50px' }}/>
                <img className="foto" src="./images/imagen_5.jpg" alt="Foto 3" style={{ width: '50px' }}/>
            </div>
            <div className="container-left">
                <div className="home__info">
                <h3> Descubre la Serenidad en Nuestro Refugio de Tranquilidad y Naturaleza </h3>
                <p className="container__parrafo ">Nuestro hotel ofrece un entorno sereno rodeado de naturaleza y tranquilidad. La piscina y el entorno natural son perfectos para relajarse. Las lujosas habitaciones cuentan con comodidades modernas y vistas panorámicas. Los baños privados ofrecen productos de calidad y duchas rejuvenecedoras. Disfruta de desayunos frescos, un elegante bar y opciones culinarias variadas. El spa y el gimnasio te brindan relajación y actividad. El amable personal ofrece servicios de conserjería. Experiencia única donde comodidad y naturaleza se fusionan.</p>
                <Link to={"/contacto"} > 
                    <button> Contáctanos </button></Link>
                </div>
            </div>
            <div className="home__card">
                <h3 >Derecho de Uso Urbano</h3>
                <p>Con fecha del 1° de marzo de 2020 entró en vigencia la Ley N° 6278 referente al Derecho de Uso Urbano (DUU), por el cual se cobrará a todo turista no residente en el país mayor de 12 años, una tasa equivalente a USD 1 por cada noche que el mismo se hospede en el Hotel.</p>
            </div>
        </main>
    )
}

export default Home;