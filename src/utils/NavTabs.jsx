import React from 'react'
import BtnContact from './BtnContact'

const NavTabs = ({ isOpen, setIsOpen }) => {
    return (
        <nav className={`container-nav ${isOpen ? "active" : ""}`}>
            <ul>
                <li><a href="" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a></li>
                <li><a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a></li>
                <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
            </ul>
        </nav>
    );
};

export default NavTabs
