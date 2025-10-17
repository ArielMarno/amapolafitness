 import '../styles/quiensoy.css';
import React from 'react';

import holistica from '../assets/holistica.webp';
import personalizada from '../assets/personalizadas.webp';
import online from '../assets/online.webp';

import user from '../assets/user.webp';

import izq from '../assets/left.webp';
import der from '../assets/right.webp';

const tarjetas = [
  { id: 1, imagen: user, testimonio: "En Amapola vas a encontrar mucho más que un lugar de entrenamiento. La calidez humana y el cuidado que recibís es único.", clienta: 'Aldana Pintos' },
  { id: 1, imagen: user, testimonio: "Bienestar general. Me gusta tu acompañamiento siempre! Y ver en cada clase los cambios que voy experimentando", clienta: 'Anita Izurieta' },
  { id: 1, imagen: user, testimonio: "Tenía una vida muy sedentaria. Seis meses después, el cuerpo me cambió muchísimo y noto que me siento mucho mejor anímicamente, con otras ganas para todo.", clienta: 'Gabi Pereyra' },
  { id: 1, imagen: user, testimonio: "Ya había pasado por muchos gimnasios pero acá sentí que tenia a una persona siguiendome de cerca y una energía que te invita a volver.", clienta: 'Maria Rosa' },
  { id: 1, imagen: user, testimonio: "Genia la profe y el espacio hermoso, siempre con más y más cosas! Un placer ser parte de Amapola!", clienta: 'Laura F.' },
];


const QuienSoy = () => {

    const scrollRef = React.useRef(null);
    
      const scroll = (direction) => {
        const { current } = scrollRef;
        const windowWidth = window.innerWidth;
        let distance;
    
        if (windowWidth > 1440) {
          distance = 350;
        } else if (windowWidth > 1025) {
          distance = 350;
        } else if (windowWidth > 768) {
          distance = 350;
        } else {
          distance = 350;
        }
    
        const start = current.scrollLeft;
        const end = direction === 'left' ? start - distance : start + distance;
        const duration = 500; // Duración de la animación en milisegundos
        const startTime = performance.now();
    
        const animateScroll = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          current.scrollLeft = start + (end - start) * progress;
    
          if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
          }
        };
    
        window.requestAnimationFrame(animateScroll);
      };
    
      // Cambios en el tamaño de la ventana
      window.addEventListener('resize', () => {
        scroll('left');
      });

  return (
    <div className='quiensoy' id='quiensoy'>
        <h5 data-aos="fade-up">Quién soy</h5>
        <div className='content'>
            <h2 data-aos="fade-up">Amapola es un espacio donde reencontrarte con tu bienestar, siguiendo tu ritmo.</h2>
            <h4 data-aos="fade-up">Soy Yamila y voy a ayudarte a sostener el movimiento e incorporar el ejercicio a tu vida en sintonía con tu propio ritmo.</h4>
        </div>

        <div className='slider'>
            <h3 data-aos="fade-up">Historias reales, impacto real.</h3>
            <div className='cards-container' ref={scrollRef} data-aos="fade-up">
                {tarjetas.map((tarjeta) => (
                <div className='card' key={tarjeta.id}>
                    <img src={tarjeta.imagen} alt={tarjeta.imagen} />
                    <h4>"</h4>
                    <p>{tarjeta.testimonio}</p>
                    <h3>{tarjeta.clienta}</h3>
                </div>
                ))}
            </div>
            <div className='contenedor-flechas' data-aos="fade-up">
                <img src={izq} className="flecha-izq" alt='flecha izquierda' id="left" onClick={()=> scroll('left')}/>
                <img src={der} alt='flecha derecha' id="right" className="flecha-der" onClick={()=> scroll('right')}/>
            </div>  
        </div>    
        <div className='items-container'>
            <div className='item' data-aos="fade-up">
                <img src={personalizada} alt="estrellas" /> 
                <h3>Clases Personalizadas</h3>
                <p>Planes personalizados para todos los niveles, desde principiantes hasta practicantes avanzados.</p>
            </div>
            <div className='item' data-aos="fade-up" data-aos-duration="800">
                <img src={holistica} alt="amapola" /> 
                <h3>Enfoque Holístico</h3>
                <p>Combinando respiración, movimiento y meditación para lograr la armonía integral del cuerpo.</p>
            </div>
            <div className='item' data-aos="fade-up" data-aos-duration="1200">
                <img src={online} alt="ubicación" /> 
                <h3>Presencial y Online</h3>
                <p>Unite a nosotros en el centro o desde la comodidad de tu casa. La flexibilidad es clave.</p>
            </div>
        </div>
        <a href="https://wa.link/qfkntk" data-aos="fade-up">Reservar mi clase</a>
    </div>
  )
}

export default QuienSoy