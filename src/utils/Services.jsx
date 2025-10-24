import React from 'react'
import CardService from './CardService'
import '../styles/stylesResponsive/responsiveServices.css'
const Services = () => {
    return (
        <div className='container-services'>
            <div className="container-info-services">
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos un acompañamiento integral adaptado a tus necesidades específicas</p>
                <CardService />
            </div>
        </div>
    )
}

export default Services
