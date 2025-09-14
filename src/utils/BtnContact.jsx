import React from 'react'
import '../styles/btnContact.css'; // Asegúrate de crear este archivo CSS para estilos adicionales

const BtnContact = () => {
    return (
        <div className='btn-contact'>
            <a href="http://wa.me/573043317903?text=Hola!%20Deseo%20más%20información..." className="">Habla con Nosotros <i className="bi bi-whatsapp"></i></a>
        </div>
    )
}

export default BtnContact
