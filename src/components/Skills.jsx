import React, { useEffect } from 'react'
import '../components/Skills.css'
import Ajax from '../components/img/AJAX.png'
import Ant from '../components/img/ant-design.png'
import Bootstrap from '../components/img/bootstrap.webp'
import Css from '../components/img/css.png'
import Git from '../components/img/Git.png'
import Github from '../components/img/github.png'
import Headless from '../components/img/headless-ui.png'
import Html from '../components/img/html.png'
import Js from '../components/img/JavaScript.png'
import Jquery from '../components/img/jQuery.png'
import Json from '../components/img/JSON.png'
import Matui from '../components/img/material-ui.png'
import Npm from '../components/img/npm.png'
import Python from '../components/img/pythonlogo.png'
import Router from '../components/img/react-router.png'
import Reactlogo from '../components/img/React.png'
import Responsive from '../components/img/Responsive.png'
import Tailwind from '../components/img/Tailwind.png'
import Vite from '../components/img/vite.png'



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