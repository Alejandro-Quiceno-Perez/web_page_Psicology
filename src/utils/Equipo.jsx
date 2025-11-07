import React, { useState } from "react";
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
            <h2>Conoce a nuestro equipo</h2>
            <div className="container-cards">
                {EquipoData.map((persona, index) => (
                    <div className="card-equipo" key={index} onClick={() => handleOpenModal(index)}>
                        <div className="equipo-img-wrapper">
                            <img src={persona.img} alt={persona.nombre} className="equipo-img" />
                        </div>
                    </div>
                ))}
            </div>

            {openModalIndex !== null && (
                <div className="modal" onClick={handleCloseModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
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
        </section>
    );
};

export default Equipo;