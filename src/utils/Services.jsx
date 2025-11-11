import React from 'react'
import { motion } from 'framer-motion'
import CardService from './CardService'
import '../styles/stylesResponsive/responsiveServices.css'
const Services = () => {
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

    return (
        <motion.div 
            className='container-services'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div className="container-info-services" variants={itemVariants}>
                <motion.h2 variants={itemVariants}>Nuestros Servicios</motion.h2>
                <motion.p variants={itemVariants}>Ofrecemos un acompañamiento integral adaptado a tus necesidades específicas</motion.p>
                <CardService />
            </motion.div>
        </motion.div>
    )
}

export default Services
