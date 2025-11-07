import React from 'react'
import '../styles/aboutUs.css'

const AboutUs = () => {
    return (
        <div className='container-aboutUs'>
            <div className="container-title-aboutUs">
                <h1>Quienes somos</h1>
                <h1>Qué hacemos</h1>
            </div>
            <div className="quienes_somos">
                <ul>
                    <li>
                        <p><span><i class="bi bi-arrow-right-short"></i></span>Somos un espacio de bienestar creado para acompañarte en tus procesos personales, de pareja, familiares y organizacionales. Un lugar donde la escucha, la empatía y la presencia consciente se encuentran con la ciencia y la experiencia profesional.</p>
                    </li>
                    <li>
                        <p><span><i class="bi bi-arrow-right-short"></i></span>Nuestro equipo está conformado por psicólogos clínicos, psicólogos organizacionales y trabajadores sociales que comparten un mismo propósito: cuidar la mente, las emociones y las relaciones desde un enfoque humano, ético y basado en evidencia</p>
                    </li>
                    <li>
                        <p><span><i class="bi bi-arrow-right-short"></i></span>Creemos que el bienestar no es solo la ausencia de dolor, sino la posibilidad de vivir con sentido, equilibrio y resiliencia. Por eso, integramos prácticas terapéuticas con herramientas de mindfulness y una mirada de vida consciente, reconociendo la diversidad y honrando la singularidad de cada historia</p>
                    </li>
                    <li>
                        <p><span><i class="bi bi-arrow-right-short"></i></span>Nuestra labor está guiada por tres pilares esenciales: confidencialidad, integridad y calidad del cuidado</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p><span><i class="bi bi-arrow-right-short"></i></span>Brindar salud mental integral y desarrollo humano para individuos, familias y organizaciones, guiados por principios de compasion, conciencia y ética profesional.</p>
                    </li>
                    <li>
                        <p><span><i class="bi bi-arrow-right-short"></i></span>Promover la salud mental y el desarrollo humano desde una perspectiva integral y con un énfasis espiritual consciente.</p>
                    </li>
                    <li>
                        <p><span><i class="bi bi-arrow-right-short"></i></span>Nuestro equipo combina experiencia clínica, investigación basada en evidencia y prácticas de mindfulness para acompañar a personas, parejas, familias y equipos de trabajo hacia estados de bienestar más profundos y sostenibles.</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default AboutUs
