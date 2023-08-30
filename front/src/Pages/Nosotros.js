import React from "react";
import "../Styles/Componentes/Pages/Nosotros.css"


const Nosotros= () =>{
    return(
        <>
        <div>
            <h1 className="encabezado">NOSOTROS</h1>
        </div>
        <div className="nosotros">
            <div class="text-side ">
                <h2 className="nosotros__titulo"> NUESTRA HISTORIA </h2>
                <p className="nosotros__parrafo"> En el corazón de Buenos Aires, en el año 1960, nació un sueño: el Hotel New Garden. Con una visión audaz y un enfoque en la excelencia, un grupo de apasionados emprendedores decidió crear un lugar que combinara la rica cultura porteña con el confort de alojamiento de primera clase. Inspirados por la energía de la ciudad, inauguraron un pequeño hotel con solo 10 habitaciones, marcando el comienzo de una historia memorable.
                A lo largo de las décadas, creció, adaptándose a las cambiantes necesidades de los viajeros y a los avances en la industria hotelera. Desde la ampliación de sus instalaciones hasta la introducción de servicios exclusivos, el hotel se ganó una sólida reputación por su hospitalidad impecable y atención al detalle. No pasó mucho tiempo antes de que se convirtiera en un nombre sinónimo de comodidad y elegancia en la vibrante ciudad de Buenos Aires.</p>
            </div>
            <div className="image-side">
                <img className="nosotros__imagen" src="./images/hotel-room.jpg" alt="Descripción de la imagen"/>
            </div>
        </div>
        <div className="nosotros__seccion">
            <div className="image-side">
                <img src="./images/imagen_3.jpg" alt="Descripción de la imagen"/>
            </div>
            <div className="text-right">
                <h2 > DESCUBRE UN MUNDO DE SERVICIOS EXCLUSIVOS</h2>
                <p>Comienza tu día con un desayuno que se sirve en un amplio y elegante espacio, donde podrás deleitarte con una selección variada de platos frescos y deliciosos. Nuestro bar es un refugio de sofisticación, donde podrás disfrutar desde cócteles creativos hasta vinos finos en un ambiente relajado y acogedor.Nuestras habitaciones son un santuario de comodidad y espacio. Diseñadas con amplitud en mente, te brindarán un espacio para relajarte y recargar energías. Sumérgete en la serenidad de nuestra decoración elegante y las vistas panorámicas de la ciudad.Nos enorgullece ofrecer una gama de servicios adicionales que elevan tu experiencia. Desde nuestro spa de clase mundial hasta el gimnasio totalmente equipado, estamos comprometidos en asegurarnos de que tu estancia sea inolvidable. Nuestro equipo de conserjería está siempre disponible para ayudarte a descubrir lo mejor que Buenos Aires tiene para ofrecer, creando momentos excepcionales durante tu estadía.</p>
            </div>
            </div>
        <div className="nosotros">
            <div class="text-side ">
                <h2 className="nosotros__titulo"> TODOS NUESTROS SERVICIOS </h2>
                <p className="nosotros__parrafo"> Nuestro hotel cuenta con muchos servicios para que su estancia resulte lo más placentera posible: </p>
                <ul className="nosotros__lista">
                    <li> Recepción 24 horas al día, 7 días a la semana</li>
                    <li> Conexión wifi gratuita</li>
                    <li> Aire acondicionado individual, calefacción central </li>
                    <li>  TV de pantalla plana, canales vía satélite</li>
                    <li> Ropa de cama con edredones</li>
                    <li> Caja fuerte individual</li>
                    <li> Servicio de conserjería y consigna</li>
                    <li> Aparcamiento privado del hotel en las inmediaciones</li>
                </ul>
            </div>
            <div className="image-side">
                <img className="nosotros__imagen" src="./images/nosotros.jpg" alt="Descripción de la imagen"/>
            </div>
        </div>
        <div className="nosotros__seccion">
        <div className="image-side">
                <img src="./images/nosotros-desayuno.jpg" alt="Descripción de la imagen"/>
            </div>
            <div className="text-right">
                <h2 > DESAYUNO </h2>
                <p>Cada mañana, de 7:30 a 10:00, el hotel ofrece un buen desayuno en un salón bien decorado, agradable y cálido. 
                Se ofrecen todos los elementos esenciales del desayunos para comenzar bien el día: cruasanes, pan con chocolate, bollos, bebidas calientes, cereales, ensalada de frutas, yogur, zumo de naranja, frutos secos, mermeladas... </p>
            </div>
            </div>
        </>
    )
}

export default Nosotros;