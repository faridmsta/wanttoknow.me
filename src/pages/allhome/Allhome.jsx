import React from 'react'

import Home from './../home/Home';
import Contact from './../../components/contact/Contact';
import Skills from './../../components/skills/Skills';
import Path from './../../components/path/Path';

import Bentogrid from './../../components/bentogrid/Bentogrid';


function Allhome({ isDarkMode, toggleDarkMode }) {
    return (
        <>
            <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Path />
            <Bentogrid />
            <Skills isDarkMode={isDarkMode} />
            <Contact />
        </>
    )
}

export default Allhome