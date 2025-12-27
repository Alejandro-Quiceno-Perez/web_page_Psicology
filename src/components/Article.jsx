import React from 'react'
import WelcomeBanner from '../utils/WelcomeBanner'
import '../styles/article.css'; // Asegúrate de crear este archivo CSS para estilos adicionales
import '../styles/stylesResponsive/responsiveArticle.css';
import Services from '../utils/Services';
import AboutMe from '../utils/AboutMe';
import Equipo from '../utils/Equipo';
import AboutUs from '../utils/AboutUs';
import Testimonios from './Testimonios';

const Article = () => {
    return (
        <div>
            <WelcomeBanner />
            <section id="servicios">
                <Services />
            </section>
            <section className='nosotros' id="nosotros">
                <AboutMe />
            </section>
            <section id="equipo">
                <Equipo />
            </section>
            <AboutUs />
        </div>
    )
}

export default Article
