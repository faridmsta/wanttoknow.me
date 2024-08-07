import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../img/Logo.png'
import './Header.css'

function Header({ isDarkMode, toggleDarkMode }) {
    const [menu, setMenu] = useState(false)
    const [menuclass, setMenuclass] = useState('')
    const [menuclass2, setMenuclass2] = useState('')
    function classreturn(cls) {
        if (!menu) setMenuclass(cls)
        else setMenuclass('')
    }
    function animationMenu(bool) {
        if (!bool) {
            document.body.style.overflowY = 'hidden'
            classreturn('menuOpened1')
            setTimeout(() => {
                classreturn('menuOpened')
            }, 200)

        }
        else {
            document.body.style.overflowY = 'unset'
            setMenuclass2('menuOpened1')
            classreturn('menuOpened')
            setTimeout(() => {
                setMenuclass2('')
            }, 200)
        }

    }



    return (
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <NavLink to='/'>
                                <img style={{filter: `${isDarkMode? 'invert(1)': 'invert(0)' } `}} src={Logo} alt="" />
                            </NavLink>
                            
                        </div>
                        
                        <nav>
                            <ul>
                                <li><a href="#cv">About</a><span></span></li>
                                <li><a href="#cpath">Career path</a><span></span></li>
                                <li><a href="#skills">Skills</a><span></span></li>
                                <li><a href="#foot">Contact</a><span></span></li>
                                <li><input onChange={toggleDarkMode} type="checkbox" class="l"/></li>
                            </ul>
                            
                        </nav>
                        <div onClick={() => { setMenu(!menu), animationMenu(menu) }} className={`hamburgerMenu ${menuclass} ${menuclass2} `}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <nav className={`togglenav ${menu && `openTogglenav`}`}>
                    <ul>
                        <li><a onClick={() => { setMenu(!menu), animationMenu(menu) }} href="#cv">About</a></li>
                        <li><a onClick={() => { setMenu(!menu), animationMenu(menu) }} href="#cpath">Career path</a></li>
                        <li><a onClick={() => { setMenu(!menu), animationMenu(menu) }} href="#skills">Skills</a></li>
                        <li><a onClick={() => { setMenu(!menu), animationMenu(menu) }} href="#foot">Contact</a></li>
                        <li><input onChange={toggleDarkMode} type="checkbox" class="l"/></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header