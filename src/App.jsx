import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Lenis from 'lenis'


import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Err from './pages/err/Err';
import Home from './pages/home/Home';



function App() {

  const [mousepos, setMousePos] = useState({ top: 0, left: 0 });
  const [loading, setLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ top: e.clientY - 16 + 'px', left: e.clientX - 16 + 'px' })
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => { document.removeEventListener('mousemove', handleMouseMove) };
  }, [mousepos])

  window.onload = (event) => {
    setLoading(false)

  };


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])


  if (loading) return <Loading />
  else
    return (
      <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
        <div className="cursor" style={mousepos}>
          <div className="dot" />
        </div>
        <Toaster toastOptions={{ className: 'informer', }} />
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path='/*' element={<Err />} />
        </ Routes>
      </div>
    );
}

export default App;
