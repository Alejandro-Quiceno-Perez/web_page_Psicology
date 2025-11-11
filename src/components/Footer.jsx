import React from 'react'
import { motion } from 'framer-motion'
import '../styles/footer.css'
import '../styles/stylesResponsive/responsiveFooter.css'
import BtnContact from '../utils/BtnContact'

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const contactItemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    }

    return (
        <motion.footer 
            className="footer"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="footer-container">
                {/* Título */}
                <motion.h2 variants={itemVariants}>
                    Da el primer paso hacia tu bienestar
                </motion.h2>

                {/* Descripción */}
                <motion.p variants={itemVariants}>
                    Estamos aquí para acompañarte. Contáctanos para agendar una primera consulta y
                    comenzar juntos este camino de crecimiento personal.
                </motion.p>

                {/* Información de contacto */}
                <motion.div className="footer-info" variants={itemVariants}>
                    <motion.a 
                        href="http://wa.me/573043317903?text=Hola!%20Deseo%20más%20información..." 
                        className="footer-item"
                        variants={contactItemVariants}
                    >
                        <i className="bi bi-telephone-forward"></i>
                        <p>+57 304 331 7903</p>
                    </motion.a>
                    <motion.a 
                        href="mailto:contacto@bianestar.com" 
                        className="footer-item"
                        variants={contactItemVariants}>
                        <i className="bi bi-envelope-check"></i>
                        <p>contacto@bienestar.com</p>
                    </motion.a>
                    <motion.a 
                        href="https://maps.app.goo.gl/KK6ScFZNUwBUUhUU6" 
                        className="footer-item"
                        variants={contactItemVariants}
                    >
                        <i className="bi bi-geo-alt-fill"></i>
                        <p>
                            Envigado, Antioquia
                        </p>
                    </motion.a>
                </motion.div>

                <div className="footer-divider"></div>

                <motion.p 
                    className="footer-bottom"
                    variants={itemVariants}
                >
                    © 2025 Metanoia. Todos los derechos reservados.
                </motion.p>
            </div>
        </motion.footer>
    )
}

export default Footer
