import React from 'react'
import { motion } from 'framer-motion'
import '../styles/cardService.css'
import '../styles/stylesResponsive/responsiveArticle.css'
import Services from '../assets/db/DataServices'


const CardService = () => {
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.9,
            y: 20 
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            }
        }
    }

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                delay: 0.2, 
                duration: 0.4 
            }
        }
    }

    return (
        <div className='card-service'>
            {
                Services.map((service, index) => (
                    <motion.div 
                        key={index} 
                        className="card-services"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <motion.h2 variants={iconVariants}>
                            <i className={`bi ${service.image}`}></i>
                        </motion.h2>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default CardService
