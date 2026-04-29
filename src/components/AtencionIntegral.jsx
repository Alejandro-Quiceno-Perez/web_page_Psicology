import React from 'react'
import "../styles/atencionIntegral.css";
import Especialidades from '../utils/Especialidades';
import ProcesoTerapeutico from '../utils/ProcesoTerapeutico';
import DiferenciadorProfesional from '../utils/DiferenciadorProfesional';
import BtnContact from '../utils/BtnContact';

const AtencionIntegral = () => {

    return (
        <section className="atencion-section" id="atencion">
            <div className="atencion-header">
                <h2>Un acompañamiento integral para tu bienestar emocional</h2>
                <p>
                    Te ofrezco un espacio seguro, profesional y personalizado para que
                    puedas sanar, crecer y reconectar contigo mismo.
                </p>
            </div>

            <div className="atencion-grid">
                <Especialidades />
                <ProcesoTerapeutico />
                <DiferenciadorProfesional />
            </div>

            <div className="atencion-cta">
                <BtnContact />
                <p>Estoy aquí para acompañarte ♡</p>
            </div>
        </section>
    );

}

export default AtencionIntegral
