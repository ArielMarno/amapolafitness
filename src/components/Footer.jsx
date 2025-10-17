import '../styles/footer.css';

import logo from '../assets/amapola.webp';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} alt="logo" />
          <h4>Transforma tu cuerpo y tu energía con movimiento consciente.</h4>
        </div>
        <div className='socials-rsp'>
          <a href="https://www.facebook.com/amapola.estudioch">Facebook</a>
          <a href="https://www.instagram.com/amapola.estudioch/">Instagram</a>
          <a href="https://wa.link/qfkntk">Whatsapp</a>
        </div>
        <div className='copy'>
          <p>© 2025 Amapola Studio Fitness. Todos los derechos reservados. </p>
          <h5>Desarrollado por <a href="https://sunfloweragencia.com/">Sunflower Agencia</a>.</h5>
        </div>
      </div>
      <div className='aside'>
        <div className='secciones'>
          <h3>Secciones</h3>
          <a href="#inicio">Inicio</a>
          <a href="#quiensoy">Quien soy</a>
          <a href="#formaciones">Formaciones</a>
          <a href="#inscripciones">Inscripciones</a>
        </div>
        <div className='socials'>
          <h3>Redes</h3>
          <a href="https://www.facebook.com/amapola.estudioch">Facebook</a>
          <a href="https://www.instagram.com/amapola.estudioch/">Instagram</a>
          <a href="https://wa.link/qfkntk">Whatsapp</a>
        </div>
      </div>
    </div>
  )
}

export default Footer