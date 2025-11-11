import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Articulos from '../../assets/db/Articulos'
import BtnContact from '../../utils/BtnContact'

const ArticulosDestacados = () => {
    const [OpenModalIndex, setOpenModalIndex] = useState(null);

    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    }

    const hangleCloseModal = () => {
        setOpenModalIndex(null);
    }


    return (
        <div className="container-articulos">
            <motion.h1 
                className="titulo-articulos"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Información de tu interés
            </motion.h1>
            <div className="card-articulos">
                {
                    Articulos.map((art, index) => (
                        <motion.div 
                            className="card-articulo" 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ 
                                delay: index * 0.15, 
                                duration: 0.6, 
                                ease: "easeOut" 
                            }}
                            whileHover={{ 
                                scale: 1.03,
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="card-img"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={art.imagen} alt={art.titulo} />
                            </motion.div>
                            <div className="card-info">
                                <h3>{art.titulo}</h3>
                                <p>{art.descripcion_corta}</p>
                                <motion.div 
                                    className="btn-verMas-blog" 
                                    onClick={() => handleOpenModal(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>Leer más </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
            <AnimatePresence>
                {
                    OpenModalIndex !== null && (
                        <motion.div 
                            className="modal-article"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div 
                                className="modal-content-article"
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <div className="close-article" onClick={hangleCloseModal}>
                                    &times;
                                </div>

                                {/* Imagen principal */}
                                <div className="modal-container-img">
                                    <img
                                        src={Articulos[OpenModalIndex].imagen}
                                        alt={Articulos[OpenModalIndex].titulo}
                                    />
                                    <div className="modal-img-info">
                                        <span>{Articulos[OpenModalIndex].categoria}</span>
                                        <span>{Articulos[OpenModalIndex].tiempo_lectura}</span>
                                    </div>
                                </div>

                                {/* Contenido del artículo */}
                                <div className="modal-container-info">
                                    <h2>{Articulos[OpenModalIndex].titulo}</h2>
                                    <p className="descripcion-larga">
                                        {Articulos[OpenModalIndex].descripcion_larga}
                                    </p>

                                    {/* Información adicional */}
                                    <div className="modal-extra-info">
                                        <p><strong>Autor:</strong> {Articulos[OpenModalIndex].autor}</p>
                                        <p><strong>Fecha:</strong> {Articulos[OpenModalIndex].fecha}</p>
                                        <p><strong>Fuente: </strong>
                                            <a href={`https://${Articulos[OpenModalIndex].fuente}`} target="_blank" rel="noreferrer">
                                                {Articulos[OpenModalIndex].fuente}
                                            </a>
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="modal-tags">
                                        {Articulos[OpenModalIndex].tags.map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>

                                    {/* Botón contacto */}
                                    <div className="btn-modal-article">
                                        <BtnContact />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}



export default ArticulosDestacados
