import React, { useState } from 'react'
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
            <h1 className="titulo-articulos">Información de tu interés</h1>
            <div className="card-articulos">
                {
                    Articulos.map((art, index) => (
                        <div className="card-articulo" key={index}>
                            <div className="card-img">
                                <img src={art.imagen} alt={art.titulo} />
                            </div>
                            <div className="card-info">
                                <h3>{art.titulo}</h3>
                                <p>{art.descripcion_corta}</p>
                                <div className="btn-verMas-blog" onClick={() => handleOpenModal(index)}>
                                    <span>Leer más </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                OpenModalIndex !== null && (
                    <div className="modal-article">
                        <div className="modal-content-article">
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
                        </div>
                    </div>
                )
            }
        </div>
    )
}



export default ArticulosDestacados
