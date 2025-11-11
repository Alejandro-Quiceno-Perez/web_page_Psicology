import React from 'react'
import { motion } from 'framer-motion'


const LogoImage = () => {
    return (
        <motion.div 
            className="container-logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <motion.img 
                className="img-logo" 
                src="./img/img_header.png" 
                alt="Logo"
                animate={{ 
                    rotate: [0, 2, -2, 0] 
                }}
                transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatDelay: 5 
                }}
            />
            <motion.h1 
                className="title-logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                METANOIA
            </motion.h1>
        </motion.div>
    )
}

export default LogoImage
