import React, { useState } from 'react'

const FormularioAgendarCita = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha: "",
    hora: "",
    edad: "",
    formaPago: "",
    modalidad: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzfD2cmnXnrx5KgtbtasBTzi5C1u8K-cRMCNsPh-ll--XEq6TRFLK47ybDSyPdaS9Wy/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json();

      if(result.success) {
        setMessage("Cita agendada exitosamente.");
        setFormData({
          nombre: "",
          correo: "",
          telefono: "",
          fecha: "",
          hora: "",
          edad: "",
          formaPago: "",
          modalidad: "",
        });
      }
    } catch (error) {
      setMessage("Error al agendar la cita. Por favor, inténtalo de nuevo.");
    }
    setLoading(false);
  }

  return (
    <div>
      <h1>Formulario para agendar citas</h1>

      <div className="">
        <form onSubmit={handleSubmit}>
          <h2>Agendar Cita</h2>
          <input type="text" name='nombre' placeholder='Nombre Completo' value={formData.nombre} onChange={handleChange} required />
          <input type="email" name='correo' placeholder='Correo Electrónico' value={formData.correo} onChange={handleChange} required />
          <input type="tel" name='telefono' placeholder='Número de Teléfono' value={formData.telefono} onChange={handleChange} required />
          <input type="date" name='fecha' placeholder='Fecha de la Cita' value={formData.fecha} onChange={handleChange} required />
          <input type="time" name='hora' placeholder='Hora de la Cita' value={formData.hora} onChange={handleChange} required />
          <input type="number" name='edad' placeholder='Edad' value={formData.edad} onChange={handleChange} required />
          <select name='formaPago' value={formData.formaPago} onChange={handleChange} required>
            <option value="">Seleccionar forma de pago</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de crédito</option>
          </select>
          <select name='modalidad' value={formData.modalidad} onChange={handleChange} required>
            <option value="">Seleccionar modalidad</option>
            <option value="presencial">Presencial</option>
            <option value="virtual">Virtual</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Agendar Cita"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormularioAgendarCita
