
import "../Styles/Componentes/Pages/Contacto.css";
import { useState } from "react";
import axios from 'axios';


const Contacto = (props) =>{


    const initialForm = {
        nombre: '',
        email : '',
        telefono : '',
        mensaje : ''
    }

    const [enviando, setEnviando ] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [formData , setFormData] = useState(initialForm);


    const handleChange = e => {
        const {name, value} = e.target ;
        setFormData(oldData => ({
            ...oldData,
            [name] : value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault ();
        setMensaje('');
        setEnviando(true)
        const response = await axios.post('http://localhost:3000/api/contacto' , formData);
        setEnviando(false);
        setMensaje(response.data.message) ; 
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }



    return(
        <>
        <div>
            <h1 className="encabezado">CONTACTO</h1>
        </div>
        <div className="contacto">
            <div className="hotel__info">
                <h3> New Garden Hotel </h3>
                <div>
                    <p> Avenida General Las Heras 1200 </p>
                    <p> Recoleta , Buenos Aires</p>
                    <p> Teléfono (+54 11) 4112-8558 </p>
                    <p> WhatsApp (+54 11) 6547-1124 </p>
                    <p> reservas@newgarden.com</p>
                </div>
            </div>
            <div className="form-container">
                <h2 className="subtitle">Nuestro equipo está disponible para atender cualquier solicitud.</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="nombre"> Nombre </label>
                        <input type="text"name="nombre" value={formData.nombre} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="email"> Correo electrónico</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="telefono"> Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="message"> Mensaje :</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        {enviando ?  <p> Enviando...</p> : null}
                        {mensaje ? <p> {mensaje} </p> : null}
                        <input type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
    }

export default Contacto;