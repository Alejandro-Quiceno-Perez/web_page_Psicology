import React from 'react'
import { motion } from 'framer-motion'
import '../styles/article.css';
import BtnContact from './BtnContact';

const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
                duration: 0.6
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: -50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            }
        }
    }

    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <motion.div 
            className="container-about-me"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{ willChange: "opacity" }}
        >
            <motion.div 
                className="about-me-img" 
                variants={imageVariants}
                style={{ willChange: "transform, opacity" }}
            >
                <img src="./img/person3.jpg" alt="Sobre mí" />
            </motion.div>

            <motion.div 
                className="about-me-info" 
                variants={contentVariants}
                style={{ willChange: "transform, opacity" }}
            >
                <motion.h2 variants={textVariants}>Cristina Henao</motion.h2>
                <motion.p variants={textVariants}>Soy Cristina, psicóloga clínica y fundadora de Zentai, con más de cinco años de experiencia. Mi trayectoria incluye dos años en una funeraria, donde adquirí amplia experiencia en el acompañamiento en duelo. También he trabajado con niños y disfruto guiando a jóvenes y adultos en sus procesos psicológicos.
                    <br />
                    Ofrezco sesiones presenciales en Medellín y virtuales para cualquier lugar del mundo, enfocadas en acompañarte a sanar, construir bienestar y reconectar contigo</motion.p>
                    
                <motion.div 
                    className="btn-about-me"
                    variants={textVariants}
                >
                    <BtnContact />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AboutMe
