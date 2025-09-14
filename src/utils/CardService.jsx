import React from 'react'
import '../styles/cardService.css'
import Services from '../assets/db/DataServices'


const CardService = () => {
    return (
        <div className='card-service'>
            {
                Services.map((service, index) => (
                    <div key={index} className="card-services">
                        <h2><i className={`bi ${service.image}`}></i></h2>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CardService
