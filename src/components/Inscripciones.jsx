import '../styles/inscripciones.css';
import { useState } from 'react';

import face from '../assets/facebook.webp';
import ig from '../assets/instagram.webp';
import wsp from '../assets/whatsapp.webp';

const Inscripciones = () => {

    // Estado para almacenar los datos del formulario
      const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        motivo: '',
        mensaje: '',
      });
    
      // Manejar cambios en los inputs
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (
    <div className='inscripciones' id='inscripciones'>
        <form action="https://formspree.io/f/mnngwpqv" method="POST" data-aos="fade-up">
                    <fieldset>
                        <div>
                             <label htmlFor="nombre">Nombre</label>
                             <input type="text" name='nombre' id='nombre' placeholder='Nombre' value={formData.nombre} autoComplete="off" onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="number" name='telefono' id='telefono' placeholder='Teléfono' value={formData.telefono} autoComplete="off" onChange={handleInputChange} required/>
                        </div>
                    </fieldset>
                    <div className='seleccion'>
                        <label htmlFor="motivo">Motivo del contacto:</label>                            
                        <select id="motivo" name="motivo" required>
                             <option value="Inscripciones">Inscripciones</option>
                            <option value="Consultas">Consulta</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div className='comentario'>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" placeholder='Mensaje' value={formData.mensaje} autoComplete="off" onChange={handleInputChange} required></textarea>
                    </div>               
            <button type='submit'>Enviar</button>
        </form>
        <div className='content'>
            <h5 data-aos="fade-up">Inscripciones</h5>
            <h2 data-aos="fade-up">Ponete en contacto</h2>
            <p data-aos="fade-up">Si te interesa inscribirte en alguna de las modalidades de entrenamiento, en uno de los talleres o simplemente queres despejar alguna duda que tengas podes hacerlo de forma directa con este formulario. </p>
            <div className='socials'>
                <a href="https://www.facebook.com/amapola.estudioch" data-aos="fade-up"><img src={face} alt="Facebook" /></a> 
                <a href="https://www.instagram.com/amapola.estudioch/" data-aos="fade-up" data-aos-duration="800"><img src={ig} alt="Instragram" /></a> 
                <a href="https://wa.link/qfkntk" data-aos="fade-up" data-aos-duration="1200"><img src={wsp} alt="Whatsapp" /></a>
            </div>
        </div>
    </div>
  )
}

export default Inscripciones