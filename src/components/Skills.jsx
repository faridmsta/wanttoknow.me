import React, { useEffect } from 'react'
import './Skills.css'
import Ajax from './img/AJAX.png'
import Ant from './img/ant-design.png'
import Bootstrap from './img/bootstrap.webp'
import Css from './img/css.png'
import Git from './img/Git.png'
import Github from './img/github.png'
import Headless from './img/headless-ui.png'
import Html from './img/html.png'
import Js from './img/JavaScript.png'
import Jquery from './img/jQuery.png'
import Json from './img/JSON.png'
import Matui from './img/material-ui.png'
import Npm from './img/npm.png'
import Python from './img/pythonlogo.png'
import Router from './img/react-router.png'
import Reactlogo from './img/React.png'
import Responsive from './img/Responsive.png'
import Tailwind from './img/Tailwind.png'
import Vite from './img/vite.png'



function Skills() {

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const list = [
        Ant,
        Headless,
        Git,
        Bootstrap,
        Github,
        Js,
        Python,
        Npm,
        Jquery,
        Css,
        Html,
        Ajax,
        Json,
        Reactlogo,
        Vite,
        Router,
        Responsive,
        Tailwind,
        Matui,]
    return (
        <div>
            <section className='skills'>
                <div className="container">
                    <div className="skillsWrap">

                        {list.map((item, index) => {
                            return (
                                <div key={index} /*style={{ rotate: rand(-10, 10) + 'deg' }}*/ className="logoWrap">
                                    <img src={item} alt="" />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills