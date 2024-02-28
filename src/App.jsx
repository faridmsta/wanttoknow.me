import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Permision from './components/Permision';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Path from './components/Path';
import Loading from './components/Loading';
import { Toaster } from 'react-hot-toast';
function App() {
  const location = useLocation();
  const [permision, setPermision] = useState(true);
  const [mousepos, setMousePos] = useState({ top: 0, left: 0 });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (location.pathname === '/') {
      setPermision(false);
    } else {
      setPermision(true);
    }
  }, [location]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ top: e.clientY - 16 + 'px', left: e.clientX - 16 + 'px' })
    }
    document.addEventListener('mousemove', handleMouseMove);
    return () => { document.removeEventListener('mousemove', handleMouseMove) };
  }, [mousepos])

  window.onload = (event) => {
    // setTimeout(() => { setLoading(false) }, 3000)
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
        {/* {permision && <Header />} */}

        <Toaster toastOptions={{className: 'informer', }} />
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Path />
        <Skills />
        <Contact />


        {/* <Routes>
        <Route path="/" element={<Permision />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/career" element={<Path />} />
        <Route path="/load" element={<Loading />} />
      </Routes> */}
      </div>
    );
}

export default App;
