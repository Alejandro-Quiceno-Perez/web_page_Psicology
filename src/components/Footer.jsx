import React from 'react'
import '../styles/footer.css'
import '../styles/stylesResponsive/responsiveFooter.css'
import BtnContact from '../utils/BtnContact'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Título */}
                <h2>Da el primer paso hacia tu bienestar</h2>

                {/* Descripción */}
                <p>
                    Estamos aquí para acompañarte. Contáctanos para agendar una primera consulta y
                    comenzar juntos este camino de crecimiento personal.
                </p>

                {/* Información de contacto */}
                <div className="footer-info">
                    <a href="http://wa.me/573043317903?text=Hola!%20Deseo%20más%20información..." className="footer-item">
                        <i class="bi bi-telephone-forward"></i>
                        <p>+57 304 331 7903</p>
                    </a>
                    <a href="mailto:contacto@bianestar.com" className="footer-item">
                        <i className="bi bi-envelope-check"></i>
                        <p>contacto@bienestar.com</p>
                    </a>
                    <a href="https://maps.app.goo.gl/KK6ScFZNUwBUUhUU6" className="footer-item">
                        <i class="bi bi-geo-alt-fill"></i>
                        <p>
                            Envigado, Antioquia
                        </p>
                    </a>
                </div>

                {/* <div className="footer-btn">
                    <BtnContact />
                </div> */}
            </div>
        </footer>
    )
}

export default Footer
