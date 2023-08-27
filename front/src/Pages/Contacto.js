
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
        <div className="form-container">
            <h1 className="title">Título del artículo</h1>
            <h2 className="subtitle">Subtítulo del artículo</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="nombre"> nombre</label>
                    <input type="text"name="nombre" value={formData.nombre} onChange={handleChange} />
                </div>
            <div className="form-group">
                <label for="email">email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label for="telefono">telefono</label>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="message">Mensaje:</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">

                {enviando ?  <p> enviando...</p> : null}
                {mensaje ? <p> {mensaje} </p> : null}
                <input type="submit" value="Enviar"/>
            </div>
            </form>
        </div>
    )
    }

export default Contacto;