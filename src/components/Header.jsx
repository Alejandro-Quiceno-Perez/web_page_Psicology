import { useState, useEffect } from "react";
import "../styles/header.css"; // Asegúrate de crear este archivo CSS para estilos adicionales
import LogoImage from "../utils/LogoImage";
import NavTabs from "../utils/NavTabs";

export default function Header({showNav = true, navItems}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <header className={`container-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <LogoImage />
        {
          showNav && <NavTabs navItems={navItems} />
        }
      </div>

    </header>
  );
}

