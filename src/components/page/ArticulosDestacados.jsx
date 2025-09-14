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
                            <div className="close-article">
                                <span onClick={hangleCloseModal}>&times;</span>
                            </div>
                            <div className="modal-container-img">
                                <img src={Articulos[OpenModalIndex].imagen} alt={Articulos[OpenModalIndex].titulo} />
                            </div>
                            <div className="modal-container-info">
                                <h2>{Articulos[OpenModalIndex].titulo}</h2>
                                <p>{Articulos[OpenModalIndex].descripcion_larga}</p>
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
