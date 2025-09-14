import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import BtnWhatspp from './utils/BtnWhatspp';
import BtnTop from './utils/BtnTop';
import BlogPage from './components/page/BlogPage';


function App() {


  return (
    <Router>
      <div className='container-app' >
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Article />
            </>
          } />
          <Route path="/blogPage" element={
            <>
              <Header />
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
