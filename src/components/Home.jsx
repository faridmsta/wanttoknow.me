import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline';
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../components/Home.css'
import Meg from '../components/img/megradient.png'
import Click from '../components/sound/click.mp3'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
function Home() {
  const allicons = document.querySelectorAll('.round .icon')
  useEffect(() => {
    Aos.init();
  }, [])

  function clicksound() {
    new Audio(Click).play();
  }

  setTimeout(() => {
    document.querySelector('.mainContent').style.opacity = "1"
  }, 500)

  function showlink(e) {
    for (let i = 0; i < allicons.length; i++) {
      if (allicons[i].classList != e.currentTarget.classList) {
        allicons[i].classList.remove('openlink')
      }

    }
    e.currentTarget.classList.toggle('openlink')

  }

  return (

    <main>
      <section className="intro">
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
                    I am a Computer Engineering student at Azerbaijan Technical University.
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
      <section className="social">
        <div className="container">
          <div className="socialWrap">
            <div className="head">
              <h2>Let's Connect</h2>
              <p>Just tap on the icons and and follow the link</p>
            </div>
            <div className="socialM">
              <div className="round">
                <div onClick={showlink} className='icon'>
                  <FaFacebookSquare />
                  <div className="ltoR">
                    <a href="https://www.facebook.com/" target="_blank">Farid_Mustafayev</a>
                    <FaArrowRight />
                  </div>
                </div>
                <div onClick={showlink} className='icon'>
                  <FaInstagram />
                  <div className="ltoR">
                    <a href="https://www.instagram.com/faridmsta/" target="_blank">@faridmsta</a>
                    <FaArrowRight />
                  </div>
                </div>
                <div onClick={showlink} className='icon'>
                  <FaGithub />
                  <div className="ltoR">
                    <a href="https://github.com/faridmsta" target="_blank">faridmsta</a>
                    <FaArrowRight />
                  </div>
                </div>
                <div onClick={showlink} className='icon'>
                  <FaLinkedin />
                  <div className="ltoR">
                    <a href="https://www.linkedin.com/in/faridmustafayev/" target="_blank">Farid_Mustafayev</a>
                    <FaArrowRight />
                  </div>
                </div>
                <div onClick={showlink} className='icon'>
                  <FaYoutube />
                  <div className="ltoR">
                    <a href="https://www.youtube.com/channel/UCxpfu2JXCY8ZQVijUnyGllA" target="_blank">Farid_Mustafayev</a>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="d3dSocialD">
              <Spline
                style={{
                  height: "60vh",
                  width: screen.width < 1024 ? '100vw' : '700px'
                }}
                scene="https://prod.spline.design/U5sCJH5Q8vbAcyi5/scene.splinecode"
              />
            </div>

          </div>
        </div>
      </section>
    </main>

  )
}

export default Home