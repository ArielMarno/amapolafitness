import '../styles/formaciones.css';
import icon from '../assets/amapolaa.webp';

const Formaciones = () => {
  return (
    <div className='formaciones' id='formaciones'>
        <div className='content'>
            <h5 data-aos="fade-up">Formaciones</h5>
            <h2 data-aos="fade-up">Encontra la formación para vos.</h2>
            <h4 data-aos="fade-up">No se trata solo de mejorar tu físico sino respetar el diseño natural del cuerpo y volver a vos.</h4>
        </div>
        <div className='cards'>
            <div className='card' data-aos="fade-up">
                <div className='card-content'>
                    <h3>Flexibilidad y Amplitud del movimiento</h3>
                    <p>Progresa y aumenta tu flexibilidad. A través de distintas técnicas te ayudo a disminuir la rigidez , y aumentar tus rangos de movimiento. Mejora tu agilidad.</p>
                </div>
                <a href="https://wa.link/hef2zx">Registrarme ahora</a>
                <div className='items'>
                    <div className='item'>
                        <img src={icon} alt="amapola" />
                        <p>Técnicas de control motor</p>
                    </div>
                    <div className='item'>
                        <img src={icon} alt="amapola" />
                        <p>Trabajos de fuerza</p>
                    </div>
                    <div className='item'>
                        <img src={icon} alt="amapola" />
                        <p>Trabajos de flexibilidad</p>
                    </div>
                </div>
            </div>
            <div className='card' data-aos="fade-up" data-aos-duration="800">
                <div className='card-content'>
                    <h3>Naturaleza cíclica y conexión con la madre tierra</h3>
                    <p>Si buscas reconectar con vos y tus ciclos femeninos, dejando atrás los viejos paradigmas que nos enajenan de nuestra ciclicidad este programa es para vos.</p>
                </div>
                <a href="https://wa.link/sbr87t">Registrarme ahora</a>
                <div className='items'>
                    <div className='item'>
                        <img src={icon} alt="amapola" />
                        <p>Conexión con la naturaleza</p>
                    </div>
                    <div className='item'>
                        <img src={icon} alt="amapola" />
                        <p>Sabiduría cíclica femenina</p>
                    </div>
                    <div className='item'>
                        <img src={icon} alt="amapola" />
                        <p>Recuperar la visión sistémica del ser</p>
                    </div>
                    <div className='item'>
                        <img src={icon} alt="amapola" />
                        <p>Menstruar como un acto energético</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Formaciones