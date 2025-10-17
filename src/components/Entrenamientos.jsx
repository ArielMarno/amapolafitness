import '../styles/entrenamientos.css';

import pilates from '../assets/pilates.webp';
import streching from '../assets/stretching.webp';
import personalizado from '../assets/personalizado.webp';
import funcional from '../assets/funcional.webp';

const Entrenamientos = () => {
  return (
    <div className='entrenamientos' id='entrenamientos'>
        <div className='main-container'>
            <div className='content'>
                <h5 data-aos="fade-up">Entrenamientos</h5>
                <h2 data-aos="fade-up">Descubrí la modalidad de entrenamiento que mejor se ajusta a tu rutina y objetivos.</h2>
                <h4 data-aos="fade-up">Clases para reconectar con tu cuerpo, mejorar tu energía y entrenar sin exigencias externas. Diseñadas para vos, según tu ritmo y tus ciclos.</h4>
            </div>
            <div className='grilla'>
                <div className='services' data-aos="fade-up">
                    <div className='image'>
                        <img src={pilates} alt="pilates" />
                    </div>
                    <h3>Pilates</h3>
                    <div className='info'>
                        <p>Es para vos si buscas moverte sin impacto, mejorando la flexibilidad y la fuerza. Trabajo profundo del Core, a través de la sincronización de respiración y movimiento.</p>
                        <a href="https://wa.link/c3h0l6">Quiero sumarme</a>
                    </div>
                </div>
                <div className='services' data-aos="fade-up" data-aos-duration="800">
                    <div className='image'>
                        <img src={streching} alt="streching" />
                    </div>
                    <h3>Stretching</h3>
                    <div className='info'>
                        <p>Abordamos técnicas de control motor, trabajos de fuerza y flexibilidad. El objetivo es re vincularnos con esa capacidad innata del ser (nacemos flexibles).</p>
                        <a href="https://wa.link/onmky5">Quiero sumarme</a>
                    </div>
                </div>
                <div className='services' data-aos="fade-up">
                    <div className='image'>
                        <img src={personalizado} alt="personalizado" />
                    </div>
                    <h3>Personalizado</h3>
                    <div className='info'>
                        <p>Acompañamiento para un entrenamiento sostenible. Planifico para que puedas desarrollar la fuerza, recuperes tu agilidad y habilidades motoras.</p>
                        <a href="https://wa.link/0255y9">Quiero sumarme</a>
                    </div>
                </div>
                <div className='services' data-aos="fade-up" data-aos-duration="800">
                    <div className='image'>
                        <img src={funcional} alt="funcional" />
                    </div>
                    <h3>Funcional</h3>
                    <div className='info'>
                        <p>Este entrenamiento es para vos si buscás mejorar tu resistencia , coordinación y fuerza. Vas a poder sentirte más cómoda/o en los gestos de la vida cotidiana</p>
                        <a href="https://wa.link/jv8arl">Quiero sumarme</a>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Entrenamientos