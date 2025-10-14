
import React from 'react';
import '../styles/testimonios.css';

const testimoniosData = [
  {
    nombre: 'María López',
    texto: 'La atención fue excelente, me sentí escuchada y comprendida desde el primer momento. Recomiendo totalmente este consultorio.',
    fecha: 'Julio 2025',
  },
  {
    nombre: 'Carlos Ramírez',
    texto: 'Gracias a las sesiones, logré superar una etapa difícil. El profesionalismo y la empatía son inmejorables.',
    fecha: 'Junio 2025',
  },
  {
    nombre: 'Ana Torres',
    texto: 'Me ayudaron a encontrar herramientas para manejar mi ansiedad. Muy agradecida por el acompañamiento.',
    fecha: 'Mayo 2025',
  },
];


const Testimonios = () => {
  return (
    <section className="testimonios-section" id="testimonios">
      <h2 className="reveal">Testimonios de pacientes</h2>
      <div className="testimonios-cards">
        {testimoniosData.map((testimonio, idx) => {
          return (
            <div className="testimonio-card reveal" key={idx}>
              <div className="testimonio-avatar">
                {testimonio.nombre.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <p className="testimonio-text">"{testimonio.texto}"</p>
              <div className="testimonio-info">
                <span className="testimonio-nombre">{testimonio.nombre}</span>
                <span className="testimonio-fecha">{testimonio.fecha}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonios;
