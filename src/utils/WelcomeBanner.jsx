import React from 'react'
import BtnContact from './BtnContact'

const WelcomeBanner = () => {
    return (
        <div className='container-info'>
            <section className="container-title">
                <h1>Te acompañamos en tu camino hacia el <span>BIENESTAR EMOCIONAL</span></h1>
                <p>Un espacio seguro y cálido donde encontrarás el apoyo profesional que necesitas. Juntos construiremos herramientas para tu crecimiento personal y emocional.
                </p>
                <div className="btn-info-container">
                    <BtnContact />
                    <div className="btn-verMas">
                        <a href="/blogPage">Conocer más </a>
                    </div>
                </div>
            </section>
            <section className="container-img">
                <div className="container__img">
                    <img src="/img/Logo_sinFondo.png" alt="Imagen de fondo lugar" />
                </div>
            </section>
        </div>
    )
}

export default WelcomeBanner
