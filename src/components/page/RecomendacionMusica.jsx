import React from 'react';
import { motion } from 'framer-motion';
import Musica from '../../assets/db/Musica';

const RecomendacionMusica = () => {
    return (
        <section className="seccion-musica">
            <motion.h2
                className="titulo-musica"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Recomendaciones Musicales
            </motion.h2>




            <div className="musica-layout">
                <div className="container-musica-section">
                    <motion.p
                        className="intro-musica"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        La música tiene el poder de transformar nuestro estado de ánimo y
                        conectar con nuestras emociones más profundas. En esta sección te
                        recomendamos algunas piezas que no solo te acompañarán, sino que te
                        inspirarán a mirar la vida desde nuevas perspectivas sonoras.
                    </motion.p>

                    <motion.div
                        className="imagen-musica-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img src='https://lainformacion.com.do/storage/2021/Septiembre/Tendencias/musica-small.jpg' alt="Música representativa" />
                    </motion.div>
                </div>
                <div className="linea-divisoria"></div>

                <div className="lista-musica">
                    {Musica.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="item-musica"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <h3>{item.titulo}</h3>
                            <p className="artista">{item.artista}</p>
                            <p className="descripcion">{item.descripcion}</p>
                            <a
                                href={item.enlace}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-escuchar"
                            >
                                🎧 Escuchar
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecomendacionMusica;

