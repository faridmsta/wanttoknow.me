import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './img/Logo.png'
import './Header.css'
import Click from './sound/click.mp3'
function Header() {
    const [menu, setMenu] = useState(false)
    function clicksound() {
        new Audio(Click).play();
      }
    return (
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <NavLink to='/home'>
                                <img src={Logo} alt="" />
                            </NavLink>
                        </div>
                        <nav>
                            <ul>
                                <li onClick={clicksound}><NavLink to="#">About</NavLink></li>
                                <li onClick={clicksound}><NavLink to="#">Education</NavLink></li>
                                <li onClick={clicksound}><NavLink to="/skills">Skills</NavLink></li>
                                <li onClick={clicksound}><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                        <div onClick={() => { setMenu(!menu) }} className={`hamburgerMenu ${menu && `menuOpened`} `}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <nav className={`togglenav ${menu && `openTogglenav`}`}>
                    <ul>
                        <li onClick={clicksound} ><NavLink to="#">About</NavLink></li>
                        <li onClick={clicksound} ><NavLink to="#">Education</NavLink></li>
                        <li onClick={clicksound} ><NavLink to="#">Skills</NavLink></li>
                        <li onClick={clicksound} ><NavLink to="#">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header