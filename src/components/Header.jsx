import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/header.css"; // Asegúrate de crear este archivo CSS para estilos adicionales
import "../styles/stylesResponsive/responsiveHeader.css"
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
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`container-header ${scrolled ? "scrolled" : ""}`}
    >
      <motion.div 
        className="header-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <LogoImage />
        {
          showNav && <NavTabs navItems={navItems} />
        }
      </motion.div>

    </motion.header>
  );
}

