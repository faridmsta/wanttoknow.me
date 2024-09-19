import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/loading/Loading';
import { Routes,Route } from 'react-router-dom';
import Allhome from './pages/allhome/Allhome';
import { Toaster } from 'react-hot-toast';
import Header from './components/header/Header';
import Err from './components/err/Err';

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
        <Routes>
          <Route path='/' element={<Allhome isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}/>
          <Route path='*' element={<Err />}/>
        </ Routes>


      </div>
    );
}

export default App;
