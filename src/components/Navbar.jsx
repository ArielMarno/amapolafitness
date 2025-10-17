import { useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/amapola.webp';
import logorsp from '../assets/amapola-rsp.webp';
import Menu from './Menu.jsx';

const Navbar = () => {

    //establecer el opuesto cuando se identifica si esta abierto el menu
    const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
        
    //booleano para apertura y cierre del menu desplegable al hacer click en los links del navegador
    const handleLinkClick = () => {
      setIsOpen(false);
    };

  return (
    <div className='navbar'>
        <a href="#inicio" className='logo'><img src={logo} alt="logo" /></a>
        <a href="#inicio" className='logo-rsp'><img src={logorsp} alt="logo" /></a>
        <nav className={`links ${isOpen ? 'open' : ''}`}>
            <a href="#quiensoy" onClick={handleLinkClick}>Quien soy</a>
            <a href="#entrenamientos" onClick={handleLinkClick}>Entrenamientos</a>
            <a href="#formaciones" onClick={handleLinkClick}>Formaciones</a>
            <a href="#inscripciones" onClick={handleLinkClick}>Inscripciones</a>
        </nav>
        <a className='nav-btn' href="https://wa.link/qfkntk">Conoce mi propuesta</a>
        <div className="menu">
            <Menu toggleMenu={toggleMenu} isOpen={isOpen}/> 
        </div>  
    </div>
  )
}

export default Navbar