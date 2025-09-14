import React from 'react'
import '../styles/article.css';
import BtnContact from './BtnContact';

const AboutMe = () => {
    return (
        <div className="container-about-me">
            <div className="about-me-img">
                <img src="./img/person3.jpg" alt="Sobre mí" />
            </div>

            <div className="about-me-info">
                <h2>Cristina Henao</h2>
                <p>Soy Cristina, psicóloga clínica y fundadora de Zentai, con más de cinco años de experiencia. Mi trayectoria incluye dos años en una funeraria, donde adquirí amplia experiencia en el acompañamiento en duelo. También he trabajado con niños y disfruto guiando a jóvenes y adultos en sus procesos psicológicos.
                    <br />
                    Ofrezco sesiones presenciales en Medellín y virtuales para cualquier lugar del mundo, enfocadas en acompañarte a sanar, construir bienestar y reconectar contigo</p>
                    
                <div className="btn-about-me">
                    <BtnContact />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
