import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../components/img/Logo.png'
import '../components/Header.css'
import Click from '../components/sound/click.mp3'
function Header() {
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
                            <NavLink to='/home'>
                                <img src={Logo} alt="" />
                            </NavLink>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#cv">About</a></li>
                                <li><a href="#cpath">Career path</a></li>
                                <li><NavLink to="/skills">Skills</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
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
                        <li><NavLink to="#">About</NavLink></li>
                        <li><NavLink to="/career">Career path</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header