import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Path from './components/path/Path';
import Loading from './components/loading/Loading';
import { Toaster } from 'react-hot-toast';
import Bentogrid from './components/bentogrid/Bentogrid';



function App() {

  const [mousepos, setMousePos] = useState({ top: 0, left: 0 });
  const [loading, setLoading] = useState(true)


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

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  if (loading) return <Loading />
  else
    return (
      <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
        <div className="cursor"
          style={mousepos}
        ><div className="dot" /></div>

        <Toaster toastOptions={{ className: 'informer', }} />
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Path />
        <Bentogrid/>
        <Skills isDarkMode={isDarkMode} />
        <Contact />


      </div>
    );
}

export default App;
