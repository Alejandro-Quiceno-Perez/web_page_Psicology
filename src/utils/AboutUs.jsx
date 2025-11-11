import React from 'react'
import { motion } from 'framer-motion'
import '../styles/aboutUs.css'

const AboutUs = () => {
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

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    const leftColumnVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 0.8, 
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    const rightColumnVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }

    return (
        <motion.div 
            className='container-aboutUs'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div 
                className="container-title-aboutUs"
                variants={titleVariants}
            >
                <motion.h1 variants={titleVariants}>Quienes somos</motion.h1>
                <motion.h1 variants={titleVariants}>Qué hacemos</motion.h1>
            </motion.div>
            <div className="quienes_somos">
                <motion.ul variants={leftColumnVariants}>
                    <motion.li variants={itemVariants}>
                        <p><span><i className="bi bi-arrow-right-short"></i></span>Somos un espacio de bienestar creado para acompañarte en tus procesos personales, de pareja, familiares y organizacionales. Un lugar donde la escucha, la empatía y la presencia consciente se encuentran con la ciencia y la experiencia profesional.</p>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <p><span><i className="bi bi-arrow-right-short"></i></span>Nuestro equipo está conformado por psicólogos clínicos, psicólogos organizacionales y trabajadores sociales que comparten un mismo propósito: cuidar la mente, las emociones y las relaciones desde un enfoque humano, ético y basado en evidencia</p>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <p><span><i className="bi bi-arrow-right-short"></i></span>Creemos que el bienestar no es solo la ausencia de dolor, sino la posibilidad de vivir con sentido, equilibrio y resiliencia. Por eso, integramos prácticas terapéuticas con herramientas de mindfulness y una mirada de vida consciente, reconociendo la diversidad y honrando la singularidad de cada historia</p>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <p><span><i className="bi bi-arrow-right-short"></i></span>Nuestra labor está guiada por tres pilares esenciales: confidencialidad, integridad y calidad del cuidado</p>
                    </motion.li>
                </motion.ul>
                <motion.ul variants={rightColumnVariants}>
                    <motion.li variants={itemVariants}>
                        <p><span><i className="bi bi-arrow-right-short"></i></span>Brindar salud mental integral y desarrollo humano para individuos, familias y organizaciones, guiados por principios de compasion, conciencia y ética profesional.</p>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <p><span><i className="bi bi-arrow-right-short"></i></span>Promover la salud mental y el desarrollo humano desde una perspectiva integral y con un énfasis espiritual consciente.</p>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <p><span><i className="bi bi-arrow-right-short"></i></span>Nuestro equipo combina experiencia clínica, investigación basada en evidencia y prácticas de mindfulness para acompañar a personas, parejas, familias y equipos de trabajo hacia estados de bienestar más profundos y sostenibles.</p>
                    </motion.li>
                </motion.ul>
            </div>
        </motion.div>
    )
}

export default AboutUs
