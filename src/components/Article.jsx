import React from 'react'
import WelcomeBanner from '../utils/WelcomeBanner'
import '../styles/article.css'; // Asegúrate de crear este archivo CSS para estilos adicionales
import Services from '../utils/Services';
import AboutMe from '../utils/AboutMe';
import Equipo from '../utils/Equipo';

const Article = () => {
    return (
        <div>
            <WelcomeBanner />
            <section id="servicios">
                <Services />
            </section>
            <section id="nosotros">
                <AboutMe />
            </section>
            <section id="equipo">
                <Equipo />
            </section>
        </div>
    )
}

export default Article
