import React from 'react';
import { motion } from 'framer-motion';
import Libros from '../../assets/db/Libros';

const RecomendacionLibros = () => {
    return (
        <section className="seccion-libros">
            {/* Título principal */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="titulo-seccion"
            >
                Recomendación de Libros
            </motion.h2>

            {/* Introducción */}
            <motion.p
                className="intro-seccion"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <strong>Leer es una forma de sanar, reflexionar y crecer. </strong> 
                Los libros pueden convertirse en verdaderos compañeros de viaje: te ayudan a entender tus emociones, 
                a mirar la vida desde nuevas perspectivas y a encontrar respuestas en momentos difíciles. 
                En esta sección te compartimos una selección de lecturas que inspiran la calma, fortalecen la mente 
                y alimentan el alma. Cada libro fue elegido pensando en su poder para ayudarte a desarrollar habilidades emocionales, 
                aumentar la empatía y fomentar una relación más saludable contigo mismo y con los demás.
            </motion.p>

            {/* Contenedor de libros */}
            <div className="libros-container">
                {Libros.map((libro, index) => (
                    <motion.div
                        key={libro.id}
                        className="card-libro"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="libro-img">
                            <img src={libro.imagen} alt={libro.titulo} />
                        </div>
                        <div className="libro-info">
                            <h3>{libro.titulo}</h3>
                            <p className="autor">{libro.autor}</p>
                            <p className="descripcion">{libro.descripcion}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default RecomendacionLibros;