import React from 'react'
import BtnContact from './BtnContact'
import { motion } from 'framer-motion'

const WelcomeBanner = () => {

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    }

    const spanVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className='container-info'>
            <motion.section className="container-title" variants={itemVariant}>
                <motion.h1 variants={itemVariant}>
                    Te acompañamos en tu camino hacia el{' '}
                    <motion.span 
                        variants={spanVariant}
                        className="highlight-text"
                    >
                        BIENESTAR EMOCIONAL
                    </motion.span>
                </motion.h1>
                <motion.p variants={itemVariant}>
                    Un espacio seguro y cálido donde encontrarás el apoyo profesional que necesitas. Juntos construiremos herramientas para tu crecimiento personal y emocional.
                </motion.p>
                <motion.div 
                    className="btn-info-container"
                    variants={itemVariant}
                >
                    <BtnContact />
                    <div className="btn-verMas">
                        <a href="/blogPage">Conocer más </a>
                    </div>
                </motion.div>
            </motion.section>
            <motion.section 
                className="container-img" 
                variants={imageVariant}
            >
                <motion.div 
                    className="container__img"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src="/img/Logo_sinFondo_cafe1png.png" alt="Imagen de fondo lugar" />
                </motion.div>
            </motion.section>
        </motion.div>
    )
}

export default WelcomeBanner
