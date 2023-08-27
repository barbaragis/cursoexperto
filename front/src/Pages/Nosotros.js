import React from "react";
import "../Styles/Componentes/Pages/Nosotros.css"

const Nosotros= () =>{
    return(
        <>
        <div className="nosotros">
            <div class="text-side">
                <h2 className="nosotros__titulo">Nuestra Historia</h2>
                <p className="nosotros__parrafo"> En el corazón de Buenos Aires, en el año 1960, nació un sueño: el Hotel New Garden. Con una visión audaz y un enfoque en la excelencia, un grupo de apasionados emprendedores decidió crear un lugar que combinara la rica cultura porteña con el confort de alojamiento de primera clase. Inspirados por la energía de la ciudad, inauguraron un pequeño hotel con solo 10 habitaciones, marcando el comienzo de una historia memorable.</p>
                <p>A lo largo de las décadas, creció, adaptándose a las cambiantes necesidades de los viajeros y a los avances en la industria hotelera. Desde la ampliación de sus instalaciones hasta la introducción de servicios exclusivos, el hotel se ganó una sólida reputación por su hospitalidad impecable y atención al detalle. No pasó mucho tiempo antes de que se convirtiera en un nombre sinónimo de comodidad y elegancia en la vibrante ciudad de Buenos Aires.</p>
                <p>Hoy en día, New Garden Hotel es un ícono en Buenos Aires y un destino de preferencia para viajeros de todo el mundo. Su legado de hospitalidad, el compromiso con la calidad y una ubicación inmejorable cerca de los puntos más emblemáticos de la ciudad lo convierten en un refugio acogedor y sofisticado. Continuamente en busca de superar las expectativas, el hotel mantiene su promesa de ofrecer experiencias memorables y auténticas a cada huésped que cruza su umbral.</p>
            </div>
            <div className="image-side">
                <img className="nosotros__imagen" src="./images/historia.jpg" alt="Descripción de la imagen"/>
            </div>
        </div>
        <div className="nosotros__seccion">
        <div className="image-side">
                <img src="./images/historia.jpg" alt="Descripción de la imagen"/>
            </div>
            <div className="text-right">
                <h2 > Descubre un mundo de servicios exclusivos</h2>
                <p>Comienza tu día con un desayuno que se sirve en un amplio y elegante espacio, donde podrás deleitarte con una selección variada de platos frescos y deliciosos. Nuestro bar es un refugio de sofisticación, donde podrás disfrutar desde cócteles creativos hasta vinos finos en un ambiente relajado y acogedor.Nuestras habitaciones son un santuario de comodidad y espacio. Diseñadas con amplitud en mente, te brindarán un espacio para relajarte y recargar energías. Sumérgete en la serenidad de nuestra decoración elegante y las vistas panorámicas de la ciudad.Nos enorgullece ofrecer una gama de servicios adicionales que elevan tu experiencia. Desde nuestro spa de clase mundial hasta el gimnasio totalmente equipado, estamos comprometidos en asegurarnos de que tu estancia sea inolvidable. Nuestro equipo de conserjería está siempre disponible para ayudarte a descubrir lo mejor que Buenos Aires tiene para ofrecer, creando momentos excepcionales durante tu estadía.</p>
            </div>
            </div>
        </>
    )
}

export default Nosotros;