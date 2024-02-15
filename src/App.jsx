import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Permision from './components/Permision';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
function App() {
  const location = useLocation();
  const [permision, setPermision] = useState(true);
  const [mousepos, setMousePos] = useState({ top: 0, left: 0 });

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

  return (
    <>
      <div className="cursor"
        style={mousepos}
      ><div className="dot" /></div>
      {permision && <Header />}
      <Routes>
        <Route path="/" element={<Permision />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
