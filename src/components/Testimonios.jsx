
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/testimonios.css';

const testimoniosData = [
  {
    nombre: 'María López',
    texto: 'La atención fue excelente, me sentí escuchada y comprendida desde el primer momento. Recomiendo totalmente este consultorio.',
    fecha: 'Julio 2025',
  },
  {
    nombre: 'Carlos Ramírez',
    texto: 'Gracias a las sesiones, logré superar una etapa difícil. El profesionalismo y la empatía son inmejorables.',
    fecha: 'Junio 2025',
  },
  {
    nombre: 'Ana Torres',
    texto: 'Me ayudaron a encontrar herramientas para manejar mi ansiedad. Muy agradecida por el acompañamiento.',
    fecha: 'Mayo 2025',
  },
];


const Testimonios = () => {
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 30 
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

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  }

  return (
    <motion.section 
      className="testimonios-section" 
      id="testimonios"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        className="reveal"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Testimonios de pacientes
      </motion.h2>
      <div className="testimonios-cards">
        {testimoniosData.map((testimonio, idx) => {
          return (
            <motion.div 
              className="testimonio-card reveal" 
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 }
              }}
              custom={idx}
              transition={{ delay: idx * 0.15 }}
            >
              <motion.div 
                className="testimonio-avatar"
                variants={avatarVariants}
              >
                {testimonio.nombre.split(' ').map(n => n[0]).join('').toUpperCase()}
              </motion.div>
              <p className="testimonio-text">"{testimonio.texto}"</p>
              <div className="testimonio-info">
                <span className="testimonio-nombre">{testimonio.nombre}</span>
                <span className="testimonio-fecha">{testimonio.fecha}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Testimonios;
