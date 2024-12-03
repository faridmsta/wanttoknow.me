import React, { useEffect, useState } from 'react'
import Letsconnect from '../../components/connect/Letsconnect';

import Aos from 'aos'
import 'aos/dist/aos.css'
import './Home.css'
import Meg from './../../components/img/megradient.png'
import Click from './../../components/sound/click.mp3'
import Pdf from "./../../components/res/faridmustafayevresume.pdf";
import Path from '../../components/path/Path';
import Bentogrid from '../../components/bentogrid/Bentogrid';
import Skills from '../../components/skills/Skills';
import Contact from '../../components/contact/Contact';


function Home({ isDarkMode, toggleDarkMode }) {


  useEffect(() => {
    Aos.init();
  }, [])


  function clicksound() {
    new Audio(Click).play();
  }


  function showinfo() {
    setNotifyup('')
    setNotifyup('shownotify');
    setTimeout(() => {
      setNotifyup('')
    }, 2000)

  }

  function redButton() {
    window.open(Pdf);
    clicksound()
    showinfo()
  }

  setTimeout(() => {
    document.querySelector('.mainContent').style.opacity = "1"
  }, 500)


  return (

    <main>
      <section className={`intro ${isDarkMode ? 'intro-dark' : ''}`}>
        <div className="container">
          <div className="introWrap">
            <div className="mainContent">
              <div className="littleAbout">
                <div className="name">
                  <p>I'm</p>
                  <h1>Farid Mustafayev</h1>
                </div>
                <span></span>
                <div className="myText">
                  <p>
                    Computer Engineering student and Frontend Developer.
                  </p>

                </div>
              </div>

              <div className="photoOfMe">
                <img src={Meg} alt="" />
              </div>
              <div className="whyMe">
                <p>
                  It's not just a  job,
                  <br />
                  it's who I am! Let's create quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Letsconnect isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <section id='cv' className="dwCV">
        <div className="container">
          <div className="dwCVWrap">
            <div className="head">
              <p>To Download my CV </p>
              <h2>Click the button</h2>
            </div>
            <div className="body">
              <button className="btn-class-name">
                <span className="back"></span>
                <span onClick={redButton} className="front"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Path/>
      <Bentogrid/>
      <Skills isDarkMode={isDarkMode} />
      <Contact/>
    </main>

  )
}

export default Home