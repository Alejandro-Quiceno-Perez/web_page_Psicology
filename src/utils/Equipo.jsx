import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/equipo.css";
import "../styles/stylesResponsive/responsiveEquipo.css";
import EquipoData from "../assets/db/DataEquipo";

const Equipo = () => {
    const [openModalIndex, setOpenModalIndex] = useState(null);

    const handleOpenModal = (index) => {
        setOpenModalIndex(index);
    };

    const handleCloseModal = () => {
        setOpenModalIndex(null);
    };

    return (
        <section className="container-equipo">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Conoce a nuestro equipo
            </motion.h2>
            <div className="container-cards">
                {EquipoData.map((persona, index) => (
                    <motion.div
                        className="card-equipo"
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                            delay: index * 0.2, 
                            duration: 0.6, 
                            ease: "easeOut" 
                        }}
                        onClick={() => handleOpenModal(index)}
                    >
                        <div className="equipo-img-wrapper">
                            <img src={persona.img} alt={persona.nombre} className="equipo-img" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {openModalIndex !== null && (
                    <div className="modal" onClick={handleCloseModal} >
                        <div className="modal-content" onClick={(e) => e.stopPropagation()} >
                            <span className="close" onClick={handleCloseModal}>
                                &times;
                            </span>
                            <div className="modal-header">
                                <img className="modal-img" src={EquipoData[openModalIndex].img} alt={EquipoData[openModalIndex].nombre} />
                                <h3 className="modal-title">{EquipoData[openModalIndex].nombre}</h3>
                            </div>
                            <p className="modal-rol"> {EquipoData[openModalIndex].rol}</p>
                            <p className="modal-description">{EquipoData[openModalIndex].moreDescription}</p>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Equipo;