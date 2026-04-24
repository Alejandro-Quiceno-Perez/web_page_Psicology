import React, { useEffect, useState } from 'react'
import '../styles/SplashScreen.css'
import logo from '../../public/img/letraCrisHenao.png'

const SplashScreen = () => {

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000) // Duración de la pantalla de carga en milisegundos

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <img src={logo} alt="Logo" className="splash-logo" />
      <div className="loader"></div>
    </div>
  )
}

export default SplashScreen
