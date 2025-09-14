import { useState, useEffect } from "react";
import "../styles/header.css"; // Asegúrate de crear este archivo CSS para estilos adicionales
import LogoImage from "../utils/LogoImage";
import NavTabs from "../utils/NavTabs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Cambia cuando se baja más de 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="container-header">
      <div className="header-content">
        <LogoImage />
        <NavTabs />
      </div>
    </header>
  );
}

