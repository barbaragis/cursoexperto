import React from "react";
import "../Styles/Componentes/Pages/Home.css";

const Home = () =>{
    return(
        <main className="container">
            <div className="home">
        <div>
            <img className="home.contenido home__imagen" src="images/header.jpg" alt="Imagen de encabezado" />
            <div className="contenido">
                <span>Sumérgete en el Lujo y la Tranquilidad </span> 
            </div>
        </div>
            </div>
            <div className="home">
                <h2 className="home__titulo">  ¡Esperamos darle la bienvenida pronto! </h2>
                <p className="home__parrafo"> Descubra el encanto de Buenos Aires en el Hotel BellaVista. En el corazón de la ciudad, nuestras elegantes habitaciones ofrecen comodidad y lujo moderno, con vistas panorámicas impresionantes. Nuestro restaurante de clase mundial ofrece sabores auténticos, y nuestras instalaciones incluyen spa y salas de reuniones. Con una ubicación privilegiada cerca de lugares icónicos como el Obelisco y los barrios San Telmo y Palermo, somos su puerta de entrada a lo mejor de la ciudad. Experimente la auténtica hospitalidad argentina en el Hotel BellaVista: su hogar lejos del hogar en esta inolvidable aventura porteña. </p>
                <button> NUESTROS SERVICIOS </button> 
            </div>
            <div className="container-left">
                <img className="img" src="./images/home-foto.jpg"  alt="hotel"/>
                <div>
                <h3> Descubre la Serenidad en Nuestro Refugio de Tranquilidad y Naturaleza </h3>
                <p className="container__parrafo ">Nuestro hotel te brinda un entorno sereno en las afueras de la ciudad, donde la tranquilidad y la paz son tus compañeras constantes. Rodeado de exuberante vegetación y paisajes impresionantes, disfrutarás de un refugio relajante lejos del bullicio urbano. Sumérgete en la serenidad de nuestra piscina, rodeada de un entorno natural que invita al descanso y la renovación. Ya sea que desees nadar o simplemente relajarte en una tumbona, encontrarás el espacio perfecto para desconectar y recargar energías. Ven a descubrir un oasis de calma en nuestro hotel, donde la belleza de la naturaleza y la comodidad se unen para brindarte una experiencia única.</p>
                </div>
            </div>
            <div className="container-right">
            <h3>Explora el Lujo y la Comodidad en Nuestras Habitaciones de Hotel</h3>
                <p className="container__parrafo ">Nuestras elegantes habitaciones de hotel ofrecen una experiencia de lujo incomparable. Con un diseño cuidadoso y comodidades modernas, te aseguramos un ambiente acogedor y sofisticado. Disfruta de amplias camas, tecnología de entretenimiento de vanguardia y vistas panorámicas de la ciudad. Los baños privados te brindan tranquilidad con productos de calidad y duchas rejuvenecedoras. Además, el acceso Wi-Fi de alta velocidad y el servicio a la habitación las 24 horas completan una estancia inolvidable.</p>
                <img className="img" src="./images/hotel-room.jpg"  alt="hotel"/>
            </div>
            <div className="container-left">
                <img className="img" src="./images/room.jpg"  alt="hotel"/>
                <h3> Disfruta de Experiencias Únicas: Del Desayuno al Relax en Nuestro Hotel</h3>
                <p className="container__parrafo ">Comienza tu día con un desayuno variado y fresco en nuestro acogedor comedor, donde satisfacemos todos los gustos. Nuestro bar elegante te espera con una amplia gama de bebidas, desde cócteles creativos hasta vinos finos. Disfruta de la relajación en nuestro spa y mantente activo en nuestro gimnasio equipado. Nuestro personal amable está listo para ayudarte con servicios de conserjería para aprovechar al máximo tu estancia. En nuestro hotel, la experiencia culinaria y el confort se unen para brindarte momentos inolvidables.</p>
            </div>
            <div className="home">
                <h4 className="home__titulo"> Encuentranos en nuestras redes sociales </h4>
               </div>
            <div class="grid-container ">
             <div class="grid-item blue-bg"  > Facebook </div>
                <div class="grid-item"  ><img src="images/imagen_1.jpg" alt="Imagen 1" /></div>
                <div class="grid-item" ><img src="images/imagen_2.jpg" alt="Imagen 2" /> </div>
                <div class="grid-item"><img src="images/imagen_3.jpg" alt="Imagen 3"/></div>
                <div class="grid-item "><img src="images/imagen_4.jpg" alt="Imagen 4"/> </div>
                <div class="grid-item" ><img src="images/imagen_5.jpg" alt="Imagen 5"/></div>
                <div class="grid-item"><img src="images/imagen_6.jpg" alt="Imagen 6"/></div>
                <div class="grid-item blue-bg"  > Instagram </div>
</div>

        </main>
    )
}

export default Home;