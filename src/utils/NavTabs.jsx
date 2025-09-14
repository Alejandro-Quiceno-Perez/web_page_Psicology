import React from 'react'
import BtnContact from './BtnContact'

const NavTabs = () => {
    return (
        <div className="container-nav">
            <ul>
                <li><a href="/" className="">Home</a></li>
                <li><a href="#servicios" className="">Servicios</a></li>
                <li><a href="/#nosotros" className="">Nosotros</a></li>
                <li><a href="#contacto" className="">Contacto</a></li>
            </ul>
            {/* <BtnContact /> */}
        </div>
    )
}

export default NavTabs
