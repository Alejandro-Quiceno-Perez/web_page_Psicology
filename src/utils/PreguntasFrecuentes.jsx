import React from 'react'
import '../styles/preguntasFrecuentes.css'
import { color, motion } from 'framer-motion';


const faqs = [
    {
        question: "¿Cómo sé si necesito terapia psicológica?",
        answer:
            "La terapia puede ayudarte cuando sientes ansiedad, tristeza, estrés o dificultades emocionales. No es necesario estar en crisis para buscar apoyo profesional."
    },
    {
        question: "¿Cuánto dura una sesión?",
        answer:
            "Cada sesión tiene una duración aproximada entre 45 y 60 minutos dependiendo del proceso terapéutico."
    },
    {
        question: "¿Las sesiones son virtuales o presenciales?",
        answer:
            "Ofrecemos sesiones presenciales y virtuales para adaptarnos a tus necesidades y disponibilidad."
    },
    {
        question: "¿Lo que hable es confidencial?",
        answer:
            "Sí. Todo lo conversado en consulta es completamente confidencial bajo principios éticos profesionales."
    },
    {
        question: "¿Qué sucede en la primera sesión?",
        answer:
            "En la primera sesión exploramos tu motivo de consulta y definimos juntos el mejor enfoque para tu proceso."
    },
    {
        question: "¿Qué temas puedo tratar en terapia?",
        answer:
            "Puedes trabajar ansiedad, duelo, autoestima, relaciones, estrés, manejo emocional,crecimiento personal y muchos otros aspectos de tu vida."
    }
];

const PreguntasFrecuentes = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            className=" container-section py-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="PreguntasFrecuentes-section">
                <h2 className="fw-bold">Preguntas frecuentes</h2>
                <p className="text-muted">
                    Resolvemos algunas dudas comunes antes de iniciar tu proceso. <i style={{ color: 'var(--azul-polvo)' }}>puedes sentirte seguro aquí</i>
                </p>
            </div>

            <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                    <motion.div
                        className="accordion-item mb-3 border rounded-4"
                        key={index}
                        variants={itemVariants}
                    >
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse${index}`}
                            >
                                {faq.question}
                            </button>
                        </h2>

                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default PreguntasFrecuentes
