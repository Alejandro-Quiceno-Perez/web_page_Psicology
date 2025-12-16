import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Articulos from '../../assets/db/Articulos'
import BtnContact from '../../utils/BtnContact'

/**
 * Componente ArticulosDestacados
 * ----------------------------------
 * Muestra una lista paginada de artículos destacados con animaciones.
 * Permite abrir un modal para leer el contenido completo de cada artículo.
 */
const ArticulosDestacados = () => {

    /**
     * Estado que controla qué artículo está abierto en el modal.
     * - null  → ningún modal abierto
     * - number → índice real del artículo en el array Articulos
     */
    const [OpenModalIndex, setOpenModalIndex] = useState(null)

    /**
     * Abre el modal del artículo seleccionado
     * @param {number} realIndex - índice real dentro del array Articulos
     */
    const handleOpenModal = (realIndex) => {
        setOpenModalIndex(realIndex)
    }

    /**
     * Cierra el modal de artículo
     */
    const hangleCloseModal = () => {
        setOpenModalIndex(null)
    }

    /**
     * Estado y configuración de paginación
     */
    const [currentPage, setCurrentPage] = useState(1)
    const articlesPerPage = 3

    /**
     * Cálculos de paginación
     */
    const totalPages = Math.ceil(Articulos.length / articlesPerPage)
    const startIndex = (currentPage - 1) * articlesPerPage
    const endIndex = startIndex + articlesPerPage

    /**
     * Artículos que se muestran en la página actual
     */
    const currentArticles = Articulos.slice(startIndex, endIndex)

    return (
        <div className="container-articulos">

            {/* Título de la sección con animación de entrada */}
            <motion.h1
                className="titulo-articulos"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Información de tu interés
            </motion.h1>

            {/* Contenedor de tarjetas de artículos */}
            <div className="card-articulos">
                {currentArticles.map((art, index) => {

                    /**
                     * Índice real del artículo dentro del array completo
                     * (necesario para que el modal muestre el contenido correcto)
                     */
                    const realIndex = startIndex + index

                    return (
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
                            viewport={{ once: true }}
                        >
                            {/* Imagen del artículo */}
                            <div className="card-img">
                                <img src={art.imagen} alt={art.titulo} />
                            </div>

                            {/* Información resumida del artículo */}
                            <div className="card-info">
                                <h3>{art.titulo}</h3>
                                <p>{art.descripcion_corta}</p>

                                {/* Botón para abrir el modal del artículo */}
                                <motion.div
                                    className="btn-verMas-blog"
                                    onClick={() => handleOpenModal(realIndex)}
                                >
                                    <span>Leer más</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Controles de paginación */}
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={currentPage === i + 1 ? 'active' : ''}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>

            {/* Modal del artículo seleccionado */}
            <AnimatePresence>
                {OpenModalIndex !== null && (
                    <div className="modal-article">
                        <div className="modal-content-article">

                            {/* Botón para cerrar el modal */}
                            <div className="close-article" onClick={hangleCloseModal}>
                                &times;
                            </div>

                            {/* Imagen principal del artículo */}
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

                            {/* Información completa del artículo */}
                            <div className="modal-container-info">
                                <h2>{Articulos[OpenModalIndex].titulo}</h2>

                                <p className="descripcion-larga">
                                    {Articulos[OpenModalIndex].descripcion_larga}
                                </p>

                                {/* Información adicional */}
                                <div className="modal-extra-info">
                                    <p><strong>Autor:</strong> {Articulos[OpenModalIndex].autor}</p>
                                    <p><strong>Fecha:</strong> {Articulos[OpenModalIndex].fecha}</p>
                                    <p>
                                        <strong>Fuente:</strong>{' '}
                                        <a
                                            href={Articulos[OpenModalIndex].fuente}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {Articulos[OpenModalIndex].fuente}
                                        </a>
                                    </p>
                                </div>

                                {/* Etiquetas del artículo */}
                                <div className="modal-tags">
                                    {Articulos[OpenModalIndex].tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>

                                {/* Botón de contacto */}
                                <div className="btn-modal-article">
                                    <BtnContact />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ArticulosDestacados
