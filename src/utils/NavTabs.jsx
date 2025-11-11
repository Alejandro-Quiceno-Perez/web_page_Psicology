import React from 'react'
import { motion } from 'framer-motion'

const NavTabs = ({ navItems = []}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <motion.nav 
            className={`container-nav`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.ul>
                {
                    navItems.map((item, index) => (
                        <motion.li 
                            key={item.href}
                            variants={itemVariants}
                        >
                            <a href={item.href}>{item.label}</a>
                        </motion.li>
                    ))
                }
                
            </motion.ul>
        </motion.nav>
    );
};

export default NavTabs
