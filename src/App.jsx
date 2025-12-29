import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import BtnWhatspp from './utils/BtnWhatspp';
import BtnTop from './utils/BtnTop';
import BlogPage from './components/page/BlogPage';
import SplashScreen from './utils/SplashScreen';


function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect (() => {
  //   const timer = setTimeout(() => setLoading(false), 2600); // Duración total incluyendo el fade-out
  //   return () => clearTimeout(timer);
  // },[]);

  // if (loading) return <SplashScreen />;

  const [loading, setLoading] = useState(() => {
    const hasShownSplash = sessionStorage.getItem('splashShown');
    return !hasShownSplash;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('splashShown', 'true');
      }, 4000);
      return () => clearTimeout(timer);
    }
  },[loading]);

  if (loading) return <SplashScreen />;
 
  const mainNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const blogNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <Router>
      <div className='container-app' >
        <Routes>
          <Route path="/" element={
            <>
              <Header showNav={true} navItems={mainNavItems} />
              <Article />
            </>
          } />
          <Route path="/blogPage" element={
            <>
              <Header showNav={true} navItems={blogNavItems} />
              <BlogPage />
            </>
          } />
        </Routes>
        <div id="contacto">
          <Footer />
        </div>
        <BtnTop />
        <BtnWhatspp />
      </div>
    </Router>
  )
}

export default App
